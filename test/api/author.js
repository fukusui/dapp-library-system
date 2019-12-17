var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();

describe('Author Search', () => {
  var Admin = keystone.list('Admin');
  var Author = keystone.list('Author');
	var adminData = {
		address: '0x449aBdD847e0f264105Abde330dFEaC1602033f6',
		name: {first: 'Tom', last: 'Hanks'},
		email: 'nb@keystone.com ',
		password: 'cideraplle234'};
  var newAdmin = new Admin.model(adminData);
  newAdmin.save();
  var adminId = newAdmin._id;
  var token = newAdmin.generateJwt();
  var newAuthor = Author.model({first_name: "Yukio", last_name: "Mishima"});
  newAuthor.save();

  describe('', () => {

    it('should /GET author based on Search Queries', (done) => {
      let author = {first_name: "Yukio"};
      chai.request(app)
        .post('/api/author/search')
        .send(author)
        .end((err, res) => {
 					res.should.have.status(200);
          done();
        });
    });
  });

	after((done) => {
		Admin.model.remove({}, (err) => {});
		Author.model.remove({}, (err) => {});
		done();
	});

});
