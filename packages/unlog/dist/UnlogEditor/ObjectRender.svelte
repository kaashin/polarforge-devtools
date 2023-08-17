<script>
	import { slide, fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { EditorHighlightedRow } from './unlogEditorUtils';
	import ArrayRender from './ArrayRender.svelte';
	import DisplayRow from './DisplayRow.svelte';
	import Chevron from './../icons/Chevron.svelte';
	import PlusCircle from './../icons/PlusCircle.svelte';
	import Icon from './../icons/Icon.svelte';
	import AddObjectItem from './AddObjectItem.svelte';

	const dispatch = createEventDispatcher();

	export let object;
	export let open = true;
	export let tabIndex = 0;
	export let key;
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

	let addingItem = false;
	let displayArr = parseObject(object);

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

		console.log('there was an update', newObject);

		dispatch('change', newObject);
	}

	$: if (!open) {
		addingItem = false;
	}

	$: console.log('DEBUG', { object });
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
	<div class="object-content" transition:slide|local={{ duration: 150 }}>
		{#each displayArr as property, index}
			{#if typeof property.value === 'object' && !property?.value?.length}
				<svelte:self
					object={property.value}
					key={property.key}
					tabIndex={tabIndex + 1}
					allowDelete={true}
					handleDelete={() => {
						handleDelete(property.key);
					}}
					on:change={(e) => {
						property.value = e.detail;
						// update the main displayARr
						displayArr[index] = property;
					}}
				/>
			{:else if typeof property.value === 'object' && Array.isArray(property.value)}
				<ArrayRender
					arr={property.value}
					key={property.key}
					tabIndex={tabIndex + 1}
					allowDelete={true}
					parentDelete={() => handleDelete(key)}
					on:change={(e) => {
						property.value = e.detail;
						// update the main displayARr
						displayArr[index] = property;
					}}
				/>
			{:else}
				<DisplayRow
					key={property.key}
					value={property.value}
					tabIndex={tabIndex + 1}
					allowDelete={true}
					handleDelete={() => handleDelete(property.key)}
					on:change={(e) => {
						console.log('updated!');
						property.value = e.detail;
						console.log(property);
						// update the main displayARr
						displayArr[index] = property;
					}}
				/>
			{/if}
		{/each}
	</div>
	<!-- <div class="add-item">
		<DisplayRow tabIndex={tabIndex + 1}>
			<div>
				{#if addingItem}
					Adding item {'>>>'}
				{:else}
					<div
						class="add-item-block"
						on:click={() => {
							console.log('add item');
						}}
						in:fade={{ duration: 200 }}
					>
						<Icon size="md" icon={PlusCircle} style="padding-right: 0.4em" /> Add Item
					</div>
				{/if}
			</div>
		</DisplayRow>
	</div> -->
{/if}
