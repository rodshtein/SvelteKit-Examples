import { store } from './store';

export const actions = {
	useStore: async ({ request }) => {
		const data = await request.formData();
		const state = data.get('state');
		store.set(state);
	},

	resetStore: () => {
		store.set();
	},

	useLocals: async ({ request, locals }) => {
		const data = await request.formData();
		const state = data.get('state');
		locals.store = state;
	}
};
