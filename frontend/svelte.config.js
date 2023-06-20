import sveltePreprocess from 'svelte-preprocess';
import postcssNesting from 'postcss-nesting';
import adapter from '@sveltejs/adapter-netlify';

const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: 
      '@use "../styles/utils.scss";'
    },
    postcss: {
      plugins: [
        postcssNesting(),
      ],
    },
  }),
  kit: {
    adapter: adapter(),
  },
  vite: {
    assetsInclude: ['**/*.webp'],
  },
};

export default config;