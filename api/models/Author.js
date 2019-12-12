var keystone = require('keystone');
var Types = keystone.Field.Types;

var Author = new keystone.List('Author');

Author.add({
  first_name: {type: String, required: true, initial: true},
  middle_name: {type: String},
  last_name: {type: String },
  date_of_birth: {type: Date},
  date_of_death: {type: Date},
});

Author.schema.virtual('displayName').get(function () {
  if(this.first_name && this.middle_name && this.last_name) {
    return this.first_name + " " + this.middle_name + " " + this.last_name;
  } else if (this.first_name && this.last_name){
      return this.first_name + " " + this.last_name;
  } else {
    return this.first_name;
  }
});


Author.defaultColumns = 'displayName';

Author.register();
