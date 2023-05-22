import sveltePreprocess from 'svelte-preprocess';
import postcssNesting from 'postcss-nesting';

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
  }),
};

export default config;
