export function handle({ event, resolve }) {
	const user = event.cookies.get('user');
	event.locals.user = user ? user : undefined;

	return resolve(event);
}