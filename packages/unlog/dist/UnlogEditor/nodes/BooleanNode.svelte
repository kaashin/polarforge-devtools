<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	/**
	 * {boolean}
	 */
	export let value = undefined;

	function handleChange(e) {
		dispatch('change', e.target.value);
	}
</script>

<style>
	select {
		background-color: inherit;
		border: 0;
		color: rgb(226, 226, 226);
		font-family: 'Lucida Console', Consolas, monospace;
		padding-left: 0.3em;
	}

	select:focus {
		outline: solid 1px var(--input-active-border-color);
		border: none;
		padding: 0.3em;
	}
</style>

<select bind:value on:change={handleChange}>
	<option value={true}>true</option>
	<option value={false}>false</option>
</select>
