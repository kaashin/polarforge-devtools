<script>
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { evalDataType } from './unlogEditorUtils';
	import DisplayRow from './DisplayRow.svelte';

	export let store = writable({});
	export let history = writable([]);

	let editorEl;
	let editor;
	let storeType = '';

	let storeUnsubscribe = () => {};

	function handleStoreChange() {
		if ($store) {
			console.log('update editor content', $store);
			// Determine the type of the store data
			storeType = evalDataType($store);

			console.log({ storeType });
		}
	}

	onMount(() => {});

	onDestroy(() => {
		storeUnsubscribe();
	});

	$: store, handleStoreChange();
</script>

{#key store || $history}
	<div bind:this={editorEl} style="width:100%; height: 100%">
		{#if storeType === 'object'}
			<!-- <ObjectEditor bind:store={$store} /> -->
		{:else if storeType === 'array'}
			<!-- <ArrayEditor bind:store={$store} /> -->
		{:else}
			<DisplayRow key="Value" bind:value={$store} allowHighlight={false} />
		{/if}
	</div>
{/key}
