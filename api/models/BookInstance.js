var keystone = require('keystone');
var Types = keystone.Field.Types;

var BookInstance = new keystone.List('BookInstance');

BookInstance.add({
  book: { type: Types.Relationship, ref: 'Book', require: true },
  availability: { type: String },
  due_date:{ type: Types.Date },
  current_barrower: { type: Types.Relationship, ref: 'User'},
  past_barrower: { type: Types.Relationship, ref: 'User', many: true, noedit: true },
});

BookInstance.schema.set('usePushEach', true);

BookInstance.register();
