<script>
	import { createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import ArrowLeft from './icons/ArrowLeft.svelte';
	import ArrowRight from './icons/ArrowRight.svelte';

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
	}

	.header > .navigation {
		display: flex;
		flex-direction: row;
		gap: 0.2rem;
		align-items: center;
	}

	.navigation > .navigation-button:hover {
		color: var(--color-action);
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		padding: var(--padding-container);
	}

	.list-item {
		padding: var(--padding-tight);
		cursor: default;
	}

	.list-item:hover:not(.active) {
		background-color: var(--color-dark-200);
	}
</style>

<div class="list">
	<div class="header">
		<h3>History</h3>
		<div class="navigation">
			<span
				class="navigation-button"
				role="button"
				tabindex="0"
				on:click={() => {
					if (activeHistoryIndex > 0) {
						activeHistoryIndex = activeHistoryIndex - 1;
						dispatch('select', activeHistoryIndex);
					}
				}}
				on:keydown={() => {
					if (activeHistoryIndex > 0) {
						activeHistoryIndex = activeHistoryIndex - 1;
						dispatch('select', activeHistoryIndex);
					}
				}}
			>
				<ArrowLeft />
			</span>
			<span
				class="navigation-button"
				role="button"
				tabindex="0"
				on:click={() => {
					if (activeHistoryIndex < $history.length - 1) {
						activeHistoryIndex = activeHistoryIndex + 1;
						dispatch('select', activeHistoryIndex);
					}
				}}
				on:keydown={() => {
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
			role="link"
			tabindex="0"
			on:click={() => {
				dispatch('select', index);
			}}
			on:keydown={() => {
				dispatch('select', index);
			}}
		>
			{entry.timestamp.toISOString()}
		</div>
	{/each}
</div>
