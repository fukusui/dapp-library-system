//User Model
var keystone = require('keystone');
var Types = keystone.Field.Types;

var Book  = new keystone.List('Book', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
});

Book.add({
  title: { type: String, required: true },
  author: { type: Types.Relationship, ref: 'Author', many: true },
  genre: { type: Types.Relationship, ref: 'Genre', many: true },
  isbn: { type: String, required: true, initial: true, unique: true},
	img: { type: Types.Url}
});

Book.schema.set('usePushEach', true);

Book.register();
