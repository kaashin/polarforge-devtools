<script>
	import { slide, fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { EditorHighlightedRow } from './unlogEditorUtils';
	import ArrayRender from './ArrayRender.svelte';
	import DisplayRow from './DisplayRow.svelte';
	import Chevron from '../icons/Chevron.svelte';
	import PlusCircle from '../icons/PlusCircle.svelte';
	import Icon from '../icons/Icon.svelte';
	import AddObjectItem from './AddObjectItem.svelte';

	const dispatch = createEventDispatcher();

	export let arr = [];
	export let open = true;
	export let tabIndex = 0;
	export let key = '';
	export let allowDelete = false;
	export let parentDelete = () => {};
	export let handleDelete = (property) => {
		try {
			const newObj = { ...object };
			delete newObj[property];
			object = { ...newObj };
		} catch (error) {
			console.error(error);
		}
	};
	export let handleChange = () => {};

	let addingItem = false;
	// let displayArr = parseObject(object);
	let displayArr = [...arr];

	function parseObject(obj) {
		const newArr = [];
		for (const key in obj) {
			newArr.push({ key, value: obj[key] });
		}
		// displayArr = [...newArr];
		return [...newArr];
	}

	function convertToObject(arr) {
		const newObj = {};
		for (const item of arr) {
			newObj[item.key] = item.value;
		}
		return newObj;
	}

	// $: parseObject(object);
	// $: console.log(convertToObject(displayArr))
	$: if (displayArr?.length) {
		const newObject = convertToObject(displayArr);

		// console.log('there was an update', newObject);

		dispatch('change', newObject);
	}

	$: if (!open) {
		addingItem = false;
	}

	// $: console.log('DEBUG', { displayArr });
</script>

<style>
	.object-block {
		display: flex;
		justify-content: center;
		margin-top: -0.2em;
		padding-top: 0.2em;
		padding-left: 0.4em;
		padding-right: 0.4em;
		background-color: var(--color-dark-200);
		border-radius: 0.2em;

		transition: all 0.2s;
	}

	.object-block:hover {
		background-color: var(--color-active);
		cursor: pointer;
	}

	.chevron {
		display: inline-block;
		width: 1em;
		height: 1em;
		padding-top: 0.15em;
	}

	.object-content {
		padding-left: 1em;
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
	<div
		class="object-block"
		on:click={() => {
			open = !open;
		}}
	>
		<span class="chevron">
			<Chevron direction={open ? 'down' : 'right'} />
		</span>
		Object
	</div>
</DisplayRow>

{#if open}
	<div class="object-content">
		{#each displayArr as node, index}
			<svelte:component
				this={node.component}
				{...node.props}
				on:change={({ detail }) => handleChange({ detail, index, key: node.props.key })}
			/>
		{/each}
	</div>
{/if}
