<script>
	import { Unlog } from 'svelte-unlog';
	import { writable } from 'svelte/store';
	import { ExampleModal } from '$lib/Stores';

	import '../app.css';
</script>

<style>
	:global(body) {
		background-image: linear-gradient(
			to right top,
			#3c516d,
			#37526f,
			#325271,
			#2c5372,
			#245474,
			#1b5775,
			#105976,
			#015c76,
			#006174,
			#056672,
			#176b6e,
			#276f6a
		);
		background-attachment: fixed;
	}
</style>

<div class="main w-full h-full">
	<slot />
</div>

<Unlog stores={[{ name: 'Example modal', store: ExampleModal }]} enable={import.meta.env.DEV} />
