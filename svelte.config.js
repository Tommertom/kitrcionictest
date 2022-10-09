// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: '200.html', // I wonder if this is necessary if your rewrite rules are set accordingly in hosting
			precompress: false
		})
	}
};

export default config;
