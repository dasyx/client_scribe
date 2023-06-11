import { writable } from 'svelte/store';

export let userLoggedIn = writable(false);

export let user = writable(false);
