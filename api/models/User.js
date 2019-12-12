//User Model Schema
var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User');

User.add({
  email: { type: Types.Email, initial: true, unique: true,
    required: true, index: true,},
  name: { type: Types.Name, required: true, index: true },
  due_books: { type: Types.Relationship, ref: 'BookInstance', many: true }
});

User.schema.set('usePushEach', true);

User.defaultColumns = 'name, email';
User.register();
