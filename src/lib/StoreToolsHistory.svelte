<script>
	import { createEventDispatcher } from 'svelte';
	import ArrowLeft from './ArrowLeft.svelte';
	import ArrowRight from './ArrowRight.svelte';

	const dispatch = createEventDispatcher();

	export let history = writable([]);
	export let activeHistoryIndex = 0;

	// $: console.log({ $history });
	$: $history, dispatch('update', $history.length);
</script>

<style lang="scss">
	.active {
		border: 1px solid var(--color-action);
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		& > .navigation {
			display: flex;
			flex-direction: row;
			gap: 0.2rem;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding: var(--padding-container);
	}

	.list-item {
		padding: var(--padding-tight);
		cursor: pointer;

		&:hover:not(.active) {
			background-color: var(--color-dark-200);
		}
	}
</style>

<div class="list">
	<div class="header">
		<h3>History</h3>
		<div class="navigation">
			<span
				on:click={() => {
					if (activeHistoryIndex > 0) {
						activeHistoryIndex = activeHistoryIndex - 1;
						dispatch('select', activeHistoryIndex);
					}
				}}
			>
				<ArrowLeft />
			</span>
			<span
				on:click={() => {
					if (activeHistoryIndex < $history.length - 1) {
						activeHistoryIndex = activeHistoryIndex + 1;
						dispatch('select', activeHistoryIndex);
					}
				}}
			>
				<ArrowRight />
			</span>
		</div>
	</div>
	{#each $history as entry, index (entry.timestamp)}
		<div
			class="list-item"
			class:active={index === activeHistoryIndex}
			on:click={() => {
				dispatch('select', index);
			}}
		>
			{entry.timestamp.toISOString()}
		</div>
	{/each}
</div>
