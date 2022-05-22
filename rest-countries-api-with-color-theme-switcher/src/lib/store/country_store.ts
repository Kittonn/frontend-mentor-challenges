import { writable } from 'svelte/store';

let data: any = [];

export const country_store = writable(data);
export const filter_region = 'all';
