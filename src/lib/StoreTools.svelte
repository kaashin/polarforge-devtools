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
	import { onDestroy, onMount } from 'svelte';
	import StoreEditor from './StoreEditor.svelte';

	export let enable = false;

	export let stores = [];

	// The active store for the editor
	let activeStoreKey = '';

	let storeObj = {};
	let subscriptions = [];
	let storeObjText = '';
	let editorContent = { json: {} };

	onMount(() => {
		stores.forEach((s) => registerStore(s.name, s.store, null));

		const test = JSON.stringify({});
		console.log({ test });
	});

	function activateStore(key) {
		activeStoreKey = key;
	}
</script>

<style lang="scss">
	.container {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 400px;
		background-color: #ccc;
		display: grid;
		grid-template-columns: 200px 1fr;
	}

	.store-list-item {
		width: 100%;

		&:hover {
			background-color: orange;
		}
	}

	.active {
		background-color: orange;
	}
</style>

{#if enable}
	<div class="container">
		<div>
			{#each Object.entries($RegisteredStores) as [storeKey, value]}
				<div
					class="store-list-item"
					class:active={storeKey === activeStoreKey}
					on:click={() => {
						activateStore(storeKey);
					}}
				>
					{storeKey}
				</div>
			{/each}
		</div>
		<div>
			{#if activeStoreKey}
				<StoreEditor store={$RegisteredStores[activeStoreKey].store} />
			{/if}
		</div>
	</div>
{/if}
