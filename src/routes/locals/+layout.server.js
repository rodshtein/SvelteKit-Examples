import { store } from './store';
import { get } from 'svelte/store';

export function load({ locals }) {
	return {
		store: get(store),
		locals: locals.store
	};
}
