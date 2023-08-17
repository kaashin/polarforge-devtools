<script>
	import { slide, fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { EditorHighlightedRow } from './unlogEditorUtils';
	import ObjectRender from './ObjectRender.svelte';
	import DisplayRow from './DisplayRow.svelte';
	import Chevron from '../icons/Chevron.svelte';
	import PlusCircle from '../icons/PlusCircle.svelte';
	import Icon from '../icons/Icon.svelte';
	import AddArrayItem from './AddArrayItem.svelte';

	const dispatch = createEventDispatcher();

	export let arr = [];
	export let open = true;
	export let tabIndex = 0;
	export let key = null;
	export let allowDelete = false;
	export let parentDelete = () => {};
	export let handleDelete = (index) => {
		try {
			let newArr = [...localArr];
			newArr.splice(index, 1);
			localArr = [...newArr];
		} catch (error) {
			console.error(error);
		}
	};
	export let handleChange = () => {};

	let addingItem = false;
	let localArr = arr;

	function handleAddItem() {
		localArr = [...localArr, null];
	}

	$: console.log('ARRAY', { arr }, arr.length, arr[0]);

	$: localArr, console.log('localArr change', localArr), dispatch('change', localArr);

	$: if (!open) {
		addingItem = false;
	}
</script>

<style>
	.array-content {
		padding-left: 1em;
	}
	.array-block {
		display: flex;
		margin-top: -0.2em;
		padding-top: 0.2em;
		padding-left: 0.4em;
		padding-right: 0.4em;
		background-color: var(--color-dark-200);
		border-radius: 0.2em;
		transition: all 0.2s;
	}

	.array-block:hover {
		background-color: var(--color-active);
		cursor: pointer;
	}

	.chevron {
		display: inline-block;
		width: 1em;
		height: 1em;
		padding-top: 0.15em;
	}

	.add-item {
		padding-left: 1em;
	}
	.add-item-block {
		display: flex;
		transition: all 0.2s;
		cursor: pointer;
	}

	.add-item-block:hover {
		color: var(--color-active);
	}
</style>

<DisplayRow
	bracketNode={true}
	{key}
	{tabIndex}
	allowHighlight={false}
	{allowDelete}
	handleDelete={() => parentDelete(key)}
>
	<!-- slot="custom" -->
	<div
		class="array-block"
		role="button"
		tabindex="0"
		on:click={() => {
			open = !open;
		}}
		on:keydown={() => {
			open = !open;
		}}
	>
		<span class="chevron">
			<Chevron direction={open ? 'down' : 'right'} />
		</span>
		Array ({localArr.length})
	</div>
</DisplayRow>

{#if open}
	<div class="array-content">
		{#each localArr as node, index}
			<svelte:component
				this={node.component}
				{...node.props}
				on:change={({ detail }) => handleChange({ detail, index, key })}
			/>
		{/each}
	</div>
{/if}
