<script context="module">
	import { writable } from 'svelte/store';

	export function registerStore(name, store, source) {
		// check if the store is actually a store
		if (store.subscribe && typeof store.subscribe === 'function') {
			RegisteredStores.update((s) => {
				let entryName = name;

				s = {
					...s,
					[entryName]: {
						name: entryName,
						store: store,
						source: source
					}
				};

				return s;
			});
		}
	}

	export const RegisteredStores = (() => {
		const store = writable({});

		return { ...store };
	})();
</script>

<script>
	import { get } from 'svelte/store';
	// import { RegisteredStores, registerStore } from './storeRegister';
	import { onDestroy, onMount } from 'svelte';
	import { JSONEditor } from 'svelte-jsoneditor';

	export let enable = false;

	export let stores = [];

	// let storeObj = [];
	let storeObj = {};
	let subscriptions = [];
	let storeObjText = '';
	let editorContent = { json: {} };

	onMount(() => {
		stores.forEach((s) => registerStore(s.name, s.store, null));

		const test = JSON.stringify({});
		console.log({ test });
	});

	async function subscribeToStores() {
		// console.log({ $RegisteredStores });
		if (Object.entries($RegisteredStores).length) {
			for (let key in $RegisteredStores) {
				// const entry = $RegisteredStores[key].store.subscribe((v) => {
				// 	storeObj[key] = {
				// 		json: v
				// 	};
				// });
				const entry = $RegisteredStores[key].store.subscribe(async (v) => {
					storeObj[key] = v;
					storeObjText = JSON.stringify(storeObj);
					editorContent = {
						json: await JSON.parse(storeObjText)
					};
				});

				// storeObjText = JSON.stringify(storeObj);

				subscriptions = [...subscriptions, entry];
			}
		}
	}

	onDestroy(() => {
		if (subscriptions.length) {
			// subscriptions.forEach((v) => v());
		}
	});

	function handleChange(updatedContent, previousContent, { contentErrors, patchResult }) {
		// content is an object { json: JSONValue } | { text: string }
		// console.log('onChange: ', { updatedContent, previousContent, contentErrors, patchResult });

		if (updatedContent.text) {
			storeObj = JSON.parse(updatedContent.text);
		}

		for (let key in storeObj) {
			$RegisteredStores[key].store.set(storeObj[key]);
		}
	}

	$: $RegisteredStores, subscribeToStores();
</script>

<style>
	.container {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 400px;
		background-color: #ccc;
	}
</style>

{#if enable && storeObjText}
	{storeObjText}
	<div class="container">
		<JSONEditor
			content={editorContent}
			onChange={(...args) => handleChange(...args)}
			mode="text"
			mainMenuBar={false}
		/>
	</div>
{/if}
