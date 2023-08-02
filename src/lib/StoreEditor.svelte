<script>
	import { writable } from 'svelte/store';
	import { RegisteredStores, registerStore } from './StoreTools.svelte';
	import { beforeUpdate, onDestroy, onMount } from 'svelte';
	import { JSONEditor } from 'svelte-jsoneditor';

	export let store = writable({});
	export let activeKey = '';

	export let content = {
		text: '',
		json: ''
	};

	let storeObjText = '';
	let editorContent = { json: {} };

	let storeUnsubscribe = () => {};

	function handleStoreChange() {
		console.log('store has changed');
		storeObjText = '';

		if ($store) {
			console.log('update editor content');
			editorContent = {
				json: $store
			};
		}
	}

	async function handleChange(updatedContent, previousContent, { contentErrors, patchResult }) {
		// content is an object { json: JSONValue } | { text: string }

		let storeObj = {};
		if (updatedContent.text) {
			storeObj = JSON.parse(updatedContent.text);
		}

		storeObjText = JSON.stringify(storeObj);

		$store = storeObj;
	}

	onDestroy(() => {
		storeUnsubscribe();
	});

	$: store, handleStoreChange();
</script>

{#key store}
	<JSONEditor
		content={editorContent}
		onChange={(...args) => handleChange(...args)}
		mode="text"
		mainMenuBar={false}
	/>
{/key}
