<script>
	import { get } from 'svelte/store';
	import ObjectRender from './ObjectRender.svelte';
	import ArrayRender from './ArrayRender.svelte';
	import DisplayRow from './DisplayRow.svelte';

	/**
	 * prop of the store
	 */
	export let store;

	function getStoreType(currentStore) {
		const type = typeof get(currentStore);
		// Check if it happens to be an array
		if (type === 'object' && Array.isArray(get(currentStore))) {
			return 'array';
		} else {
			return type;
		}
	}

	/**
	 * Parse through the store and determine the render stack
	 */
	function updateRender(object) {
		console.log({ object });
	}

	// $: storeType = getStoreType(store);

	$: $store, updateRender($store);

	// $: console.log('THE STORE IS', $store);
</script>

<style>
	.render-store {
		font-family: 'Lucida Console', Consolas, monospace;
		font-size: 12px;
	}
</style>

<div class="render-store">
	<!-- {#if storeType === 'object'}
		<ObjectRender bind:object={$store} />
	{:else if storeType === 'array'}
		<ArrayRender bind:arr={$store} />
	{:else}
		<DisplayRow key="Value" bind:value={$store} allowHighlight={false} />
	{/if} -->
</div>
