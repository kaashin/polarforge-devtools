<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	/**
	 * {number}
	 */
	export let value = undefined;

	function handleChange(e) {
		dispatch('change', e.target.value * 1);
	}
</script>

<style>
</style>

<input bind:value type="number" on:change={handleChange} />
