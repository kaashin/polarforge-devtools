<script>
	import { writable } from 'svelte/store';
	import { UnlogStores, registerStore } from './Unlog.svelte';
	import { beforeUpdate, onDestroy, onMount } from 'svelte';
	import { JSONEditor } from 'svelte-jsoneditor';

	export let store = writable({});
	export let activeStoreKey = '';
	export let contentOverride = null;
	export let history = writable([]);

	export let content = {
		text: '',
		json: ''
	};

	let storeObjText = '';
	let editorContent = { json: {} };

	let storeUnsubscribe = () => {};

	function handleStoreChange() {
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
		console.log({ updatedContent });

		let storeObj = {};
		if (updatedContent.text) {
			storeObj = JSON.parse(updatedContent.text);
		}
		if (updatedContent.json) {
			storeObj = updatedContent.json;
		}

		storeObjText = JSON.stringify(storeObj);

		$store = storeObj;
	}

	onDestroy(() => {
		storeUnsubscribe();
	});

	$: store, handleStoreChange();
</script>

{#key store || $history}
	<JSONEditor
		content={editorContent}
		onChange={(...args) => handleChange(...args)}
		mode="tree"
		mainMenuBar={false}
	/>
{/key}
