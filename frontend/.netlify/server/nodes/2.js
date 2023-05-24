import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.e86c8efd.js","_app/immutable/chunks/index.539f6559.js"];
export const stylesheets = ["_app/immutable/assets/2.c5702e39.css"];
export const fonts = [];
