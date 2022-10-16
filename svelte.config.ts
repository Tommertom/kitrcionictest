import type { Config } from '@sveltejs/kit';
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';

const config: Config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		})
	}
};

export default config;
