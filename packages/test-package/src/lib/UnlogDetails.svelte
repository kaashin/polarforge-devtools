<script>
	import { UnlogStores, ActiveStoreKey } from './unlogUtils.js';
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

{#if $UnlogStores[$ActiveStoreKey]}
	{@const details = $UnlogStores[$ActiveStoreKey]}

	<ul class="container">
		<li>{details.name}</li>
		<li>source: {details.source}</li>
	</ul>
{/if}
