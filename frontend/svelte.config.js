import sveltePreprocess from 'svelte-preprocess';
import postcssNesting from 'postcss-nesting';
import adapter from '@sveltejs/adapter-netlify';

const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: '@use "../styles/variables.scss";',
    },
    postcss: {
      plugins: [
        postcssNesting(),
      ],
    },
    kit: {
      adapter: adapter()
    }
  }),
};

export default config;
