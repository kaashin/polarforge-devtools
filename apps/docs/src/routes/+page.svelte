<script>
	import { ExampleModal } from '$lib/Stores';
	import { registerStore } from 'svelte-unlog';
	import { writable } from 'svelte/store';
	import Highlight from 'svelte-highlight';
	import bash from 'svelte-highlight/languages/bash';
	import javascript from 'svelte-highlight/languages/javascript';
	import 'svelte-highlight/styles/atom-one-dark.css';

	const newStore = writable(5);
	registerStore('Value store', newStore, 'page.svelte');

	const arrStore = writable([1, 2, 3]);
	registerStore('Array store', arrStore, 'page.svelte');
</script>

<style>
	.inline-code {
		@apply px-1 py-0 bg-gray-700 border border-dashed border-gray-400 rounded-sm text-sm;
	}
	section {
		@apply max-w-[800px] p-4 w-full;
	}
</style>

<div class="w-full flex flex-col items-center p-10 gap-4">
	<h1 class="text-3xl font-bold">Svelte-unlog</h1>
	<section class="">
		Reduce the amount of <span class="inline-code">console.log()</span> required to debug. Access your
		stores and alter the values in a dev tool panel.
	</section>
	<div class="bg-gray-800 w-120 rounded-lg shadow-xl border-gray-700 border">
		<div class="px-3 py-2 border-b border-gray-700">
			<p class="">{$ExampleModal.title}</p>
			<p class="text-xs">{$ExampleModal.description}</p>
		</div>
		<div class="p-3">
			<ul class="flex flex-col gap-2 text-sm">
				{#each $ExampleModal.steps as step}
					<li class="bg-gray-900 px-3 py-2 rounded-lg">{step.instruction}</li>
				{/each}
			</ul>
		</div>
	</div>
	<section>
		<h2 class="text-2xl font-semibold">Other examples</h2>
		<p>Array stores</p>
		<div class="flex flex-wrap gap-4 justify-center items-center">
			{#each $arrStore as item}
				<div
					class="w-16 h-16 rounded-lg bg-orange-400 shadow-lg grid items-center justify-center text-2xl font-semibold"
				>
					{item}
				</div>
			{/each}
		</div>
	</section>
	<section class=" flex flex-col items-start gap-2">
		<h2 class="text-2xl font-bold">Instructions</h2>
		<p>Install the package</p>
		<Highlight language={bash} code="npm install svelte-unlog" />
		<p>Import the package</p>
		<Highlight language={javascript} code={"import { Unlog } from 'svelte-unlog'"} />
		<p>Mount the component and provide the component the enabled condition</p>
		<Highlight language={javascript} code={`<Unlog enable={import.meta.env.DEV} />`} />
		<p>Then register the stores that you want access to in the Unlog dev panel</p>
		<Highlight
			language={javascript}
			code={`import { registerStore } from 'svelte-unlog'\n\nlet CarStore = writable({});\n\nregisterStore('Cars', CarStore)`}
		/>
	</section>
	<section class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold">Known issues</h2>
		<ul class="list-disc ml-4">
			<li>
				Will not work in a rollup project that is set to build as a IIFE. It wiil have challenges
				with the svelte-jsoneditor dependency.
			</li>
		</ul>
	</section>
</div>
