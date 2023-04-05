const db = new Set();

export function del(user) {
	if(db.has(user)) db.delete(user)
	return true;
}

export function post(user) {
	db.add( user )
	return user;
}