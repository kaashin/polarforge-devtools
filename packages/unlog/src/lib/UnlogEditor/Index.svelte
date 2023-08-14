<script>
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { evalDataType } from './unlogEditorUtils';
	import DisplayRow from './DisplayRow.svelte';
	import ArrayRender from './ArrayRender.svelte';

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

	function handleChange(e) {
		console.log('handling change!', e);
		$store = e.detail;
	}

	function handleArrayChange(e) {
		if (Array.isArray(e.detail)) {
			console.log('update the store!!!');
			store.set([...e.detail]);
		} else {
			console.warn('Array update error: new value is not an array', e.detail);
		}
	}

	$: store, handleStoreChange();
</script>

{#key store || $history}
	<div bind:this={editorEl} style="width:100%; height: 100%">
		{#if storeType === 'object'}
			<!-- <ObjectEditor bind:store={$store} /> -->
		{:else if storeType === 'array'}
			<ArrayRender arr={$store} open={true} on:change={handleArrayChange} />
		{:else}
			<DisplayRow key="Value" value={$store} allowHighlight={false} on:change={handleChange} />
		{/if}
	</div>
{/key}
