<script>
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { evalDataType } from './unlogEditorUtils';
	import DisplayRow from './DisplayRow.svelte';
	import ArrayRender from './ArrayRender.svelte';
	import ObjectRender from './ObjectRender.svelte';

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

	function handleObjectChange(e) {
		console.log('RECEIVED A CHANGE!');
		if (typeof e.detail === 'object' && !Array.isArray(e.detail) && e.detail) {
			store.set(e.detail);
		} else {
			console.warn('Object update error: the new item is not a proper object?', e.detail);
		}
	}

	$: store, handleStoreChange();
</script>

{#key store || $history}
	<div bind:this={editorEl} style="width:100%; min-height: 100%;">
		{#if storeType === 'object'}
			<ObjectRender object={$store} on:change={handleObjectChange} />
		{:else if storeType === 'array'}
			<ArrayRender arr={$store} open={true} on:change={handleArrayChange} />
		{:else}
			<DisplayRow key="Value" value={$store} allowHighlight={false} on:change={handleChange} />
		{/if}
	</div>
{/key}
