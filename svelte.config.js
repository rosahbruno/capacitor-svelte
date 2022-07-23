import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/adapter-static').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'www',
			assets: 'www',
			fallback: null,
			precompress: false
		}),
		prerender: {
			default: true
		}
	}
};

export default config;
