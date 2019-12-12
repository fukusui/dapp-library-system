if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

exports.create = {
	Admin: [
	{ 'address': process.env.ADMIN_ADDRESS,
		'name.first': process.env.ADMIN_FIRST,
    'name.last':  process.env.ADMIN_LAST,
    'email': process.env.ADMIN_EMAIL,
    'password': process.env.ADMIN_PASSWORD,
    'isAdmin': true },
	],
};
