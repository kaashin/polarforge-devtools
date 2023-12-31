import adapter from '@sveltejs/adapter-auto';
import { kPreprocess } from './src/lib/preprocess.js';
import sequence from 'svelte-sequential-preprocessor'
import { sass } from 'svelte-preprocess-sass'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
	preprocess: sequence([
		sass(),
		kPreprocess()
	])
};

export default config;
