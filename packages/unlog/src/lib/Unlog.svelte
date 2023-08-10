<script>
	import { onDestroy, onMount } from 'svelte';
	import { writable, get } from 'svelte/store';
	import StoreEditor from './UnlogEditor.svelte';
	import UnlogHistory from './UnlogHistory.svelte';
	import UnlogCss from './UnlogCss.svelte';
	import ChevronDoubleDown from './icons/ChevronDoubleDown.svelte';
	import UnlogIcon from './icons/UnlogIcon.svelte';
	import { registerStore, UnlogStores, UnlogState, ActiveStoreKey } from './unlogUtils';

	/**
	 * @type {boolean}
	 */
	export let enable = false;

	/**
	 * @typedef StoreObject
	 * @property {string} name
	 * @property {object} store
	 * @property {string} [source]
	 */
	/**
	 * @type {StoreObject[]}
	 */
	export let stores = [];

	/**
	 * @type {boolean}
	 */
	export let initialOpen = false;

	// The active store for the editor
	let activeHistoryIndex = 0;
	let unsubscribeArr = [];
	let historyCount = 0;
	let open = writable(initialOpen);

	onMount(() => {
		stores.forEach((s) => registerStore(s.name, s.store, null));
	});

	function subscribeStores() {
		unsubscribeArr.forEach((v) => v());
		unsubscribeArr = Object.entries($UnlogStores).map(([key, keyValue]) => {
			return keyValue.store.subscribe((v) => {
				// Only regisster to history if we're not in rewind mode
				if (!$UnlogState.rewindMode) {
					const test = get($UnlogStores[keyValue.name].history);
					if (JSON.stringify(test[0]?.data) != JSON.stringify(v)) {
						$UnlogStores[keyValue.name].history.set([
							{
								timestamp: new Date(),
								data: JSON.parse(JSON.stringify(v))
							},
							...get($UnlogStores[keyValue.name].history)
						]);
					}
				}
				return v;
			});
		});
	}

	function activateStore(key) {
		$ActiveStoreKey = key;
		activeHistoryIndex = 0;
		$UnlogStores[$ActiveStoreKey].store.set(
			get($UnlogStores[$ActiveStoreKey].history)[activeHistoryIndex].data
		);

		$UnlogState.rewindMode = false;
	}

	function activateHistoryIndex(index) {
		let historyValues = get($UnlogStores[$ActiveStoreKey].history);
		// if index is not zero, we are looking at historical entry
		if (index === 0) {
			$UnlogStores[$ActiveStoreKey].store.set(historyValues[index].data);
			// console.log('hisotry val', historyValues[index].data);
			$UnlogState.rewindMode = false;
		} else if (index > 0) {
			$UnlogState.rewindMode = true;
			// console.log('hisotry val', historyValues[index].data);
			$UnlogStores[$ActiveStoreKey].store.set(historyValues[index].data);
		} else {
			// do nothing.
			return;
		}

		activeHistoryIndex = index;
	}

	function minimize() {
		$open = false;
	}

	function openUnlog() {
		$open = true;
	}

	onDestroy(() => {
		unsubscribeArr.forEach((entry) => entry());
	});

	$: $UnlogStores, subscribeStores();
	// $: $UnlogStores[$ActiveStoreKey]?.history, console.log('history updated');
</script>

<style lang="scss">
	:global(.unlog *, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		-webki-font-smoothing: antialiased;
		line-height: 1.25;

		--padding-container: 0.5rem;
		--padding-tight: 0.25rem;
		--color-dark-100: #0b132b;
		--color-action: #5bc0be;
		--color-action-light: #88c2c1;
		--color-text: #ffffff;

		--color-dark-200: #1c2541;
		--color-dark-300: #3a506b;
		--color-dark-400: #607794;

		--shadow-color: 0deg 0% 55%;
		--shadow-elevation-low: -0.1px 0.5px 0.6px hsl(var(--shadow-color) / 0.29),
			-0.2px 0.8px 0.9px -1.2px hsl(var(--shadow-color) / 0.3),
			-0.6px 1.9px 2.3px -2.3px hsl(var(--shadow-color) / 0.31);
		--shadow-elevation-medium: -0.1px 0.5px 0.6px hsl(var(--shadow-color) / 0.3),
			-0.5px 1.7px 2px -0.8px hsl(var(--shadow-color) / 0.31),
			-1.2px 4px 4.8px -1.6px hsl(var(--shadow-color) / 0.32),
			-2.8px 9.7px 11.6px -2.3px hsl(var(--shadow-color) / 0.33);
		--shadow-elevation-high: -0.1px 0.5px 0.6px hsl(var(--shadow-color) / 0.25),
			-0.7px 2.6px 3.1px -0.3px hsl(var(--shadow-color) / 0.25),
			-1.3px 4.6px 5.5px -0.6px hsl(var(--shadow-color) / 0.26),
			-2.1px 7.1px 8.5px -0.9px hsl(var(--shadow-color) / 0.26),
			-3.1px 10.7px 12.8px -1.2px hsl(var(--shadow-color) / 0.27),
			-4.6px 15.8px 18.9px -1.5px hsl(var(--shadow-color) / 0.27),
			-6.6px 23.1px 27.6px -1.8px hsl(var(--shadow-color) / 0.27),
			-9.5px 32.9px 39.3px -2.1px hsl(var(--shadow-color) / 0.28),
			-13.2px 45.9px 54.8px -2.3px hsl(var(--shadow-color) / 0.28);
	}
	:global(.unlog img, picture, video, canvas, svg) {
		display: block;
		max-width: 100%;
	}
	:global(.unlog input, button, textarea, select) {
		font: inherit;
	}
	:global(.unlog p, h1, h2, h3, h4, h5, h6) {
		overflow-wrap: break-word;
	}
	:global(.unlog .text-semibold) {
		font-weight: 600;
	}
	:global(.unlog .p-1) {
	}
	:global(.unlog .p-2) {
		padding: 0.5rem;
	}
	.unlog-trigger {
		padding: var(--padding-container);
		position: absolute;
		bottom: 2rem;
		left: 1rem;
		background-color: var(--color-dark-100);
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--color-text);
		border-radius: 0.5rem;
		box-shadow: var(--shadow-elevation-medium);
		transition: all 0.2s;
		cursor: pointer;
	}
	.unlog-trigger:hover {
		background-color: var(--color-action);
	}

	.container {
		position: fixed;
		bottom: 0;
		right: 0;
		min-width: 100%;
		height: 400px;
		display: grid;
		grid-template-columns: var(--column-one-width) var(--column-two-width) 1fr;
		grid-template-rows: 1.5rem 1fr;
		background-color: var(--color-dark-100);
		color: var(--color-text);
		visibility: hidden;
		font-size: 12px;
		font-family: 'Segoe UI Mono', 'Liberation Mono', Menlo, Monaco, Consolas, monospace;
	}

	.header {
		grid-column: 1 / -1;
		background-color: var(--color-dark-300);
		padding: var(--padding-tight);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.store-container {
		padding: var(--padding-tight);
	}
	.store-list-item {
		width: 100%;
		padding: var(--padding-tight);
		cursor: default;
	}
	.store-list-item:hover {
		background-color: var(--color-dark-200);
	}

	.collapse-button {
		cursor: pointer;
	}

	.collapse-button:hover {
		color: var(--color-action);
	}

	.active {
		border: solid 1px var(--color-action);
	}
</style>

{#if enable}
	<div class="unlog">
		<div
			class="container"
			style:--column-one-width="200px"
			style:--column-two-width="240px"
			style:visibility={$open ? 'visible' : 'hidden'}
		>
			<div class="header text-semibold">
				<div>Unlog</div>
				<div
					class="collapse-button"
					role="button"
					tabindex="0"
					on:click={minimize}
					on:keydown={minimize}
				>
					<ChevronDoubleDown />
				</div>
			</div>
			<div class="store-container">
				<h3>Stores</h3>
				{#each Object.entries($UnlogStores) as [storeKey, value]}
					<div
						class="store-list-item"
						class:active={storeKey === $ActiveStoreKey}
						role="link"
						tabindex="0"
						on:click={() => {
							activateStore(storeKey);
						}}
						on:keydown={() => {
							activateStore(storeKey);
						}}
					>
						{storeKey}
					</div>
				{/each}
			</div>
			<div>
				{#if $ActiveStoreKey}
					<UnlogHistory
						history={$UnlogStores[$ActiveStoreKey].history}
						on:update={({ detail }) => {
							historyCount = detail;
						}}
						on:select={({ detail }) => activateHistoryIndex(detail)}
						bind:activeHistoryIndex
					/>
				{/if}
			</div>

			<div class="editor">
				{#if $ActiveStoreKey}
					{#key activeHistoryIndex || historyCount}
						<StoreEditor store={$UnlogStores[$ActiveStoreKey].store} />
					{/key}
				{/if}
			</div>
		</div>
		{#if !$open}
			<div
				class="unlog-trigger"
				role="button"
				tabindex="0"
				on:click={openUnlog}
				on:keydown={openUnlog}
			>
				<UnlogIcon width="2rem" height="2rem" />
			</div>
		{/if}
	</div>
	<UnlogCss />
{/if}
