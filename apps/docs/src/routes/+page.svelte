<script>
	import Unlog from '@polarforge/unlog';
	import { writable } from 'svelte/store';

	const TestStore = writable(5);
</script>

<style>
</style>

{$TestStore}

<Unlog stores={[{ name: 'Test', store: TestStore }]} enable={import.meta.env.DEV} />
