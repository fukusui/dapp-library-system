var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();
var Admin = keystone.list('Admin');
var Author = keystone.list('Author');
var Book = keystone.list('Book');

describe('Book Seach Term Test', () => {
	var adminData = {
		address: '0x449aBdD847e0f264105Abde330dFEaC1602033f6',
		name: {first: 'Tom', last: 'Hanks'},
		email: 'nb@keystone.com ',
		password: 'cideraplle234'};

 var newAdmin = new Admin.model(adminData);
  newAdmin.save();
  var adminId = newAdmin._id;
  var token = newAdmin.generateJwt();

	describe('', () => {

    it('should /GET books based on Search Queries', (done) => {
      let book = {
        title:"World Map",
        author: [{first_name: "Luciano", last_name: "Pizzano"}],
        genre: "Geography",
        isbn: "5660553804577",
        img: "google.com"
      };
      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          let search = {
            title: "World Map"
          }
          chai.request(app)
            .post('/api/book/search')
            .send(search)
            .end((err, res) => {
              done();
            });
        });
    });
  });

  after((done) => {
    Admin.model.remove({}, (err, data) => {});
    Author.model.remove({}, (err, data) => {});
	  Book.model.remove({}, (err, data) => {});
    done();
  });
});
