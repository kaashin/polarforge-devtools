<script>
	import { uid } from 'uid';
	import { createEventDispatcher } from 'svelte';
	import { EditorHighlightedRow } from './unlogEditorUtils';
	import Icon from './../icons/Icon.svelte';
	import TrashIcon from './../icons/TrashIcon.svelte';
	import NumberNode from './nodes/NumberNode.svelte';
	import BooleanNode from './nodes/BooleanNode.svelte';
	import TextNode from './nodes/TextNode.svelte';
	import NullNode from './nodes/NullNode.svelte';

	const dispatch = createEventDispatcher();

	export let bracketNode = false;
	export let value = null;
	export let key = '';
	export let allowHighlight = true;
	export let nodeLevel = 0;
	export const allowDelete = false;
	export let handleDelete = () => {};

	const initType = typeof value;
	const id = uid(8);

	let showRowMenu = false;

	function handleRowClicked() {
		$EditorHighlightedRow = id;
	}
</script>

<style>
	.row {
		display: flex;
		/* border-bottom: solid 1px rgb(60,60,60); */
		/* padding-left: 1em; */
		padding-top: 0.3em;
		padding-bottom: 0.3em;
		line-height: 1.4em;
	}

	.row:hover {
		background-color: var(--editor-row-hover-bg);
	}

	.key {
		padding-right: 1ex;
	}

	.value {
		color: var(--editor-value-color);
	}

	.highlight {
		background-color: var(--editor-row-hover-bg);
	}

	.icon {
		color: var(--color-dark-300);
		transition: all 0.1s;
	}

	.icon:hover {
		color: var(--color-active);
	}
</style>

<div
	class="row"
	on:click={handleRowClicked}
	on:keydown={handleRowClicked}
	role="button"
	tabindex="0"
	class:highlight={allowHighlight && $EditorHighlightedRow === id}
>
	{#if key}
		<span class="key">
			{key}:
		</span>
	{/if}
	<slot>
		<span class="value">
			{#if typeof value === 'number'}
				<NumberNode bind:value on:change />
			{:else if typeof value === 'boolean'}
				<!-- <select bind:value on:change={handleBooleanChange}>
						<option value={true}>true</option>
						<option value={false}>false</option>
					</select> -->
				<BooleanNode bind:value on:change />
			{:else if typeof value === 'string'}
				<!-- <input bind:value={value} type="text" /> -->
				<!-- <span contenteditable bind:innerHTML={value} on:change /> -->
				<TextNode bind:value on:change />
			{:else if typeof value === 'function'}
				<span>Function</span>
			{:else if typeof value === 'object' && value === null}
				<NullNode on:change />
			{:else}
				<span>{value}</span>
			{/if}
		</span>
	</slot>

	<div class="row-menu">
		<slot name="row-actions">
			{#if $$props.allowDelete}
				<div
					class="icon"
					on:click={handleDelete}
					on:keydown={handleDelete}
					role="button"
					tabindex="0"
				>
					<Icon size="md" icon={TrashIcon} />
				</div>
			{/if}
		</slot>
	</div>
</div>
