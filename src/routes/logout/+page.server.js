import * as api from './../api';
import { redirect } from '@sveltejs/kit';


export const actions = {
	default: async ({ cookies }) => {
		let user = await cookies.get('user')
		
		if (user) {
			await api.del(user);
			cookies.set('user', '', { path: '/' });
			throw redirect(307, '/login');
		}
	}
};