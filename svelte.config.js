import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/**  @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			// code below will import theses files globally
			prependData: `
			@import 'src/styles/variables.scss';
			@import 'src/styles/mixins.scss';
			`
		}
	}),
	kit: {
		adapter: adapter(),
	}
};

export default config;
