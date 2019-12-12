var keystone = require('keystone');
var Types = keystone.Field.Types;
var jwt = require('jsonwebtoken');
var Admin = new keystone.List('Admin');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

Admin.add({
	address: { type: Types.Text, initial: true, required: true, unique: true },
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Admin.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});

Admin.schema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    exp: parseInt(expiry.getTime() / 1000),
  }, process.env.SECRET);
};

Admin.defaultColumns = 'name, email, isAdmin, address';
Admin.register();
