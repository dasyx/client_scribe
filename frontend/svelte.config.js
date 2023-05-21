import preprocess from 'svelte-preprocess';

/**  @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				// code below will import theses files globally
				prependData: `
				@use "./src/styles/variables.scss";
			`
			},
		})
	],
};

export default config;
