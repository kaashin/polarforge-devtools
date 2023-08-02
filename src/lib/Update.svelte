<script>
	import { CustomStore } from './Store';
</script>

<button
	on:click={() => {
		$CustomStore.title = 'HELLO';
	}}>Test</button
>

{#if $CustomStore.title}
	<h1>{$CustomStore.title}</h1>
{/if}
