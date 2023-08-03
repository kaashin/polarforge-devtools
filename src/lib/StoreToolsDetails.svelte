<script>
	import { RegisteredStores, ActiveStoreKey } from './StoreTools.svelte';

	$: console.log($RegisteredStores[$ActiveStoreKey]);
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		list-style-type: none;
		padding: 0;
	}
</style>

<h3>Details</h3>

{#if $RegisteredStores[$ActiveStoreKey]}
	{@const details = $RegisteredStores[$ActiveStoreKey]}

	<ul class="container">
		<li>{details.name}</li>
		<li>source: {details.source}</li>
	</ul>
{/if}
