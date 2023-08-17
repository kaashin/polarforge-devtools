<script>
	import { writable } from 'svelte/store';
	import { onMount, onDestroy } from 'svelte';
	import { evalDataType } from './unlogEditorUtils';
	import DisplayRow from './DisplayRow.svelte';
	import ArrayRender from './ArrayRender.svelte';
	import ObjectRender from './ObjectRender.svelte';
	import ArrayNode from './ArrayNode.svelte';
	import ObjectNode from './ObjectNode.svelte';

	export let store = writable({});
	export let history = writable([]);

	let editorEl;
	let editor;
	let storeType = '';
	let renderNode = {};

	let storeUnsubscribe = () => {};

	function handleStoreChange(object) {
		// if (object) {
		// Determine the type of the store data
		storeType = evalDataType($store);

		renderNode = generateRenderNode($store);
	}

	function createNodeKey(nodeKey, key) {
		if (nodeKey) {
			return nodeKey + '.' + key;
		} else {
			return key;
		}
	}

	function parseNodeKey(nodeKey) {
		if (nodeKey) {
			const arr = nodeKey.split('.');

			if (arr.length) {
				return arr.pop();
			} else {
				return nodeKey;
			}
		}
	}

	function setObjValue(obj, parentKey, targetKey, value) {
		const pathArray = parentKey.split('.');

		let newObj = JSON.parse(JSON.stringify(obj));

		let currentObj = newObj;
		if (pathArray.length > 1) {
			for (let i = 0; i < pathArray.length; i++) {
				if (newObj[pathArray[i]]) {
					if (i === pathArray.length - 1) {
						currentObj = currentObj[targetKey];
					} else {
						currentObj = currentObj[pathArray[i]];
					}
				}
			}
		}

		currentObj[pathArray[pathArray.length - 1]][targetKey] = value;

		return newObj;
	}

	function generateRenderNode(object, nodeKey, nodeDepth = 0) {
		let type = evalDataType(object);

		let objAsArr;
		if (object) {
			objAsArr = Object.entries(object);
		}

		if (type === 'object') {
			if (object) {
				// handle objet
				const renderArr = objAsArr.map(([key, value], index) => {
					return generateRenderNode(value, createNodeKey(nodeKey, key), nodeDepth + 1);
				});

				const output = {
					component: ObjectNode,
					props: {
						arr: renderArr,
						key: parseNodeKey(nodeKey),
						open: nodeDepth ? false : true,
						handleChange: ({ detail, key }) => {
							if (!nodeKey) {
								// We're at the root
								const copy = { ...$store };
								copy[key] = detail;
								store.set(copy);
							} else {
								let copy = { ...$store };
								copy = setObjValue(copy, nodeKey, key, detail);
								store.set(copy);
							}
						}
					}
				};

				return output;
			} else {
				return {
					component: DisplayRow,
					props: {
						key: nodeKey ? parseNodeKey(nodeKey) : 'Value',
						value: null,
						allowHighlight: false
					},
					handleChange: ({ detail, key }) => {
						if (!key) {
							// Assume we're at root level
							$store = detail;
						}
					}
				};
			}
		} else if (type === 'array') {
			// handle array
			const renderArr = objAsArr.map(([key, value], index) => {
				return generateRenderNode(value, createNodeKey(nodeKey, key), nodeDepth + 1);
			});

			const output = {
				component: ArrayNode,
				props: {
					arr: renderArr,
					key: parseNodeKey(nodeKey),
					open: nodeDepth ? false : true,
					handleChange: ({ detail, index }) => {
						if (!nodeDepth) {
							let copy = [...$store];
							copy[index] = detail;
							store.set(copy);
						}
					}
				}
			};

			return output;
		} else {
			return {
				component: DisplayRow,
				props: {
					key: nodeKey ? parseNodeKey(nodeKey) : 'Value',
					value: object,
					allowHighlight: false
				},
				handleChange: ({ detail }) => {
					console.log('THERE WAS A CHANGE!');

					// $store = detail;
				}
			};
		}
	}

	onMount(() => {});

	onDestroy(() => {
		storeUnsubscribe();
	});

	function handleChange(e) {
		console.log('handling change!', e);
		$store = e.detail;
	}

	function handleArrayChange(e) {
		if (Array.isArray(e.detail)) {
			console.log('update the store!!!');
			store.set([...e.detail]);
		} else {
			console.warn('Array update error: new value is not an array', e.detail);
		}
	}

	function handleObjectChange(e) {
		console.log('RECEIVED A CHANGE!');
		if (typeof e.detail === 'object' && !Array.isArray(e.detail) && e.detail) {
			store.set(e.detail);
		} else {
			console.warn('Object update error: the new item is not a proper object?', e.detail);
		}
	}

	$: store, handleStoreChange($store);
</script>

{#key store || $history}
	<div bind:this={editorEl} style="width:100%; min-height: 100%;">
		<svelte:component
			this={renderNode.component}
			{...renderNode.props}
			on:change={renderNode.handleChange}
		/>
	</div>
{/key}
