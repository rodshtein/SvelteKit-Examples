import * as api from './../api';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const user = data.get('username');

		const body = await api.post(user);

		cookies.set('user', body, { path: '/' });

		throw redirect(307, '/');
	}
};