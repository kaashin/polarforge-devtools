<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let history = writable([]);
	export let activeHistoryIndex = 0;

	// $: console.log({ $history });
	$: $history, dispatch('update', $history.length);
</script>

<style lang="scss">
	.active {
		background-color: orange;
	}

	.history-menu-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>

<div class="history-menu-container">
	{#each $history as entry, index (entry.timestamp)}
		<div
			class="history-menu-item"
			class:active={index === activeHistoryIndex}
			on:click={() => {
				dispatch('select', index);
			}}
		>
			{entry.timestamp.toISOString()}
		</div>
	{/each}
</div>
