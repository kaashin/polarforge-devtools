<script context="module">
	import { writable, get } from 'svelte/store';

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
						source: source,
						history: writable([])
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

	export const StoreToolsState = (() => {
		const store = writable({
			rewindMode: false
		});
		return { ...store };
	})();
</script>

<script>
	import { onDestroy, onMount } from 'svelte';
	import StoreEditor from './StoreEditor.svelte';
	import StoreToolsHistory from './StoreToolsHistory.svelte';

	export let enable = false;

	export let stores = [];

	// The active store for the editor
	let activeStoreKey = '';
	let activeHistoryIndex = 0;
	let unsubscribeArr = [];
	let historyCount = 0;

	onMount(() => {
		stores.forEach((s) => registerStore(s.name, s.store, null));

		let unsubscribeRegisteredStores = RegisteredStores.subscribe((registered) => {
			// Subscribe to each store so that they update the history array
			unsubscribeArr = Object.entries(registered).map(([key, keyValue]) => {
				return keyValue.store.subscribe((v) => {
					// Only regisster to history if we're not in rewind mode
					if (!$StoreToolsState.rewindMode) {
						registered[keyValue.name].history.set([
							{
								timestamp: new Date(),
								data: JSON.parse(JSON.stringify(v))
							},
							...get(registered[keyValue.name].history)
						]);
					}
					return v;
				});
			});

			return registered;
		});

		return unsubscribeRegisteredStores;
	});

	function activateStore(key) {
		activeStoreKey = key;
		activeHistoryIndex = 0;
		$RegisteredStores[activeStoreKey].store.set(
			get($RegisteredStores[activeStoreKey].history)[activeHistoryIndex].data
		);

		$StoreToolsState.rewindMode = false;
	}

	function activateHistoryIndex(index) {
		const historyValues = get($RegisteredStores[activeStoreKey].history);
		// if index is not zero, we are looking at historical entry
		if (index === 0) {
			$RegisteredStores[activeStoreKey].store.set(historyValues[index].data);
			// console.log('hisotry val', historyValues[index].data);
			$StoreToolsState.rewindMode = false;
		} else if (index > 0) {
			$StoreToolsState.rewindMode = true;
			// console.log('hisotry val', historyValues[index].data);
			$RegisteredStores[activeStoreKey].store.set(historyValues[index].data);
		} else {
			// do nothing.
			return;
		}

		activeHistoryIndex = index;
	}

	onDestroy(() => {
		unsubscribeArr.forEach((entry) => entry());
	});

	$: console.log({ $RegisteredStores });
	$: $RegisteredStores[activeStoreKey]?.history, console.log('history updated');
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
		grid-template-columns: var(--column-one-width) var(--column-two-width) 1fr;
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
	<div class="container" style:--column-one-width="200px" style:--column-two-width="200px">
		<div>
			<h3>Stores</h3>
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
			<h3>History</h3>
			{#if activeStoreKey}
				<StoreToolsHistory
					history={$RegisteredStores[activeStoreKey].history}
					on:update={({ detail }) => {
						historyCount = detail;
					}}
					on:select={({ detail }) => activateHistoryIndex(detail)}
					bind:activeHistoryIndex
				/>
			{/if}
		</div>

		<div>
			{#if activeStoreKey}
				{#key activeHistoryIndex || historyCount}
					<StoreEditor store={$RegisteredStores[activeStoreKey].store} />
				{/key}
			{/if}
		</div>
	</div>
{/if}
