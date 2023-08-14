<script>
	import { uid } from 'uid';
	import { createEventDispatcher } from 'svelte';
	import { EditorHighlightedRow } from './unlogEditorUtils';
	import Icon from './../icons/Icon.svelte';
	import TrashIcon from './../icons/TrashIcon.svelte';

	const dispatch = createEventDispatcher();

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

	function handleNumberChange(e) {
		dispatch('change', e.target.value * 1);
	}

	function handleBooleanChange(e) {
		dispatch('change', e.target.value);
	}

	$: if (initType && (value === null || value === undefined)) {
		if (initType === 'object') {
			value = {};
		} else if (initType === 'object' && Array.isArray(value)) {
			value = [];
		} else if (initType === 'string') {
			value = '';
		} else if (initType === 'number') {
			value = 0;
		} else if (initType === 'boolean') {
			value = false;
		} else {
			value = '';
		}
	}
</script>

<style>
	input {
		background-color: inherit;
		border: 0;
		color: var(--input-active-border-color);
		line-height: 0.8em;
		margin-top: -0.2em;
	}

	input:hover {
		border-bottom: dotted 1px var(--input-active-border-color);
	}

	input:focus {
		outline: solid 1px var(--input-active-border-color);
		border: none;
		padding: 0.3em;
	}

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
	{#if $$props.key != null || $$props.key != undefined}
		<span class="key">
			{key}:
		</span>
	{/if}
	{#if $$props.value != null || $$props.value != undefined}
		<span class="value">
			{#if typeof value === 'number'}
				<input bind:value type="number" on:change={handleNumberChange} />
			{:else if typeof value === 'boolean'}
				<select bind:value on:change={handleBooleanChange}>
					<option value={true}>true</option>
					<option value={false}>false</option>
				</select>
			{:else if typeof value === 'string'}
				<!-- <input bind:value={value} type="text" /> -->
				<span contenteditable bind:innerHTML={value} on:change />
			{:else if typeof value === 'function'}
				<span>Function</span>
			{:else}
				<span>{value}</span>
			{/if}
		</span>
	{:else if $$props.value === null}
		<span><i>null</i></span>
	{/if}
	{#if $$slots.custom}
		<slot name="custom" />
	{/if}
	<div class="row-menu">
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
	</div>
</div>
