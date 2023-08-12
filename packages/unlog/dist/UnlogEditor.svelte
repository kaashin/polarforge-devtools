<script>
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	// import { JSONEditor } from 'svelte-jsoneditor';

	export let store = writable({});
	export let activeStoreKey = '';
	export let contentOverride = null;
	export let history = writable([]);

	export let content = {
		text: '',
		json: ''
	};

	let storeObjText = '';
	let editorContent = { json: {} };
	let editorEl;
	let editor;

	let storeUnsubscribe = () => {};

	function handleStoreChange() {
		storeObjText = '';

		if ($store) {
			// console.log('update editor content');
			editorContent = {
				json: $store
			};
		}
	}

	async function handleChange(updatedContent, previousContent, { contentErrors, patchResult }) {
		// content is an object { json: JSONValue } | { text: string }
		// console.log({ updatedContent });

		let storeObj = {};
		if (updatedContent.text) {
			storeObj = JSON.parse(updatedContent.text);
		}
		if (updatedContent.json) {
			storeObj = updatedContent.json;
		}

		storeObjText = JSON.stringify(storeObj);

		$store = storeObj;
	}

	onMount(() => {});

	onDestroy(() => {
		storeUnsubscribe();
	});

	$: store, handleStoreChange();
</script>

{#key store || $history}
	<!-- <div bind:this={editorEl} style="width:100%; height: 100%; border: solid 1px red">test</div> -->
	<!-- <JSONEditor
		content={editorContent}
		onChange={(...args) => handleChange(...args)}
		mode="tree"
		mainMenuBar={false}
	/> -->
{/key}
