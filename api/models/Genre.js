var keystone = require('keystone');
var Types = keystone.Field.Types;

var Genre = new keystone.List('Genre');

Genre.add({
  name: { type: String, unique: true, required: true, index: true, initial: true}
});
/**
 * Registration
 */
Genre.register();
