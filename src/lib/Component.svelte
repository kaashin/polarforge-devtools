<script>
	import { writable } from 'svelte/store';
	import { registerStore } from './storeRegister';

	/**
	 * @type {string} This modifies the color
	 */
	export let color = 'blue';

	/**
	 * @type {boolean}
	 */
	export let loading;

	export let noType;

	let hello = 'world';

	let store = writable(5);
</script>

<button on:click={() => ($store = $store + 1)}>add</button>

<div kuik={test}>{$store}</div>
