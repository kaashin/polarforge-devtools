<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let value = 'null';
	let editMode = false;

	function handleChange(e) {
		if (value != 'null') {
			if (value * 1 == value) {
				dispatch('change', value * 1);
			} else {
				dispatch('change', value);
			}
		}
	}

	function setNumber() {
		dispatch('change', 0);
	}

	function setString() {
		dispatch('change', '');
	}

	function setObject() {
		dispatch('change', {});
	}

	$: value, handleChange();
</script>

<style>
	[contenteditable] {
		background-color: var(--color-dark-100);
		padding-left: 0.3em;
	}
	span:hover {
		border-bottom: dotted 1px var(--input-active-border-color);
	}

	[contenteditable]:focus {
		outline: solid 1px var(--input-active-border-color);
		padding: 0.3em;
	}
	.edit-actions-wrapper {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5em;
	}
</style>

{#if !editMode}
	<span on:click={() => (editMode = true)}>null</span>
{:else}
	<div class="edit-actions-wrapper">
		<button class="editor-row-button" on:click={setNumber}>Number</button>
		<button class="editor-row-button" on:click={setString}>String</button>
		<button class="editor-row-button" on:click={setObject}>Object</button>
		<button class="editor-row-button" on:click={() => (editMode = false)}>Cancel</button>
	</div>
{/if}
