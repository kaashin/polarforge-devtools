<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * {string}
	 */
	export let value = undefined;

	function handleChange(e) {
		dispatch('change', e.target.textContent);
	}
</script>

<style>
	[contenteditable] {
		background-color: var(--color-dark-100);
		padding-left: 0.3em;
	}
	[contenteditable]:hover {
		border-bottom: dotted 1px var(--input-active-border-color);
	}

	[contenteditable]:focus {
		outline: solid 1px var(--input-active-border-color);
		padding: 0.3em;
	}
	div {
		min-width: 50px;
	}
</style>

<div contenteditable bind:innerHTML={value} on:blur={handleChange} />
