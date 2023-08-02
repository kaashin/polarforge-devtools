<script>
	import Component from '$lib/Component.svelte';
	import StoreTools from '$lib/StoreTools.svelte';
	import { writable } from 'svelte/store';
	import { CustomStore } from '$lib/Store';
	import Update from '$lib/Update.svelte';

	/* #registerStore */
	const ExampleStore = writable({
		loading: false
	});
</script>

<style>
	:global(body) {
		padding: 0px;
		margin: 0px;
	}
</style>

{#if $ExampleStore.loading}
	Loading...
{:else}
	<Component />
	<Component />
	<Update />
{/if}

<StoreTools enable={import.meta.env.DEV} stores={[{ name: 'CustomStore', store: CustomStore }]} />
