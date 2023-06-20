import postcssNesting from 'postcss-nesting';
import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  preprocess: sveltePreprocess({
    scss: {
      prependData: 
      `@import '../styles/utils.scss';`
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