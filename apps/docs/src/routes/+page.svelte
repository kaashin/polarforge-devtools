<script>
	import { ExampleModal } from '$lib/Stores';
	import { registerStore } from '@polarforge/unlog';
	import { writable } from 'svelte/store';

	const newStore = writable(5);
	// registerStore('Local store', newStore, 'page.svelte');
</script>

<style>
	.inline-code {
		@apply px-1 py-0 bg-gray-700 border border-dashed border-gray-400 rounded-sm text-sm;
	}
</style>

<div class="w-full flex flex-col items-center p-10 gap-4">
	<h1 class="text-3xl font-bold">Svelte-unlog</h1>
	<p class="max-w-xl p-4">
		Reduce the amount of <span class="inline-code">console.log()</span> required to debug. Access your
		stores and alter the values in a dev tool panel.
	</p>
	<div class="bg-gray-800 w-120 rounded-lg shadow-xl border-gray-700 border">
		<div class="px-3 py-2 border-b border-gray-700">
			<p class="">{$ExampleModal.title}</p>
		</div>
		<div class="p-3">
			<ul class="flex flex-col gap-2 text-sm">
				{#each $ExampleModal.steps as step}
					<li class="bg-gray-900 px-3 py-2 rounded-lg">{step.instruction}</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
