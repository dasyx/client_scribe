// svelte.config.js

import sveltePreprocess from "svelte-preprocess";

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({ 
		scss: {
			prependData: '@use "../styles/variables.scss";'
		} 
	}),
};

export default config;
