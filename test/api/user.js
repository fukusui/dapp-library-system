var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();
var assert = chai.assert;

var User = keystone.list('User');
var Admin = keystone.list('Admin');

describe('User', () => {
	var adminData = {
		address: '0x449aBdD847e0f264105Abde330dFEaC1602033f6',
		name: {first: 'Tom', last: 'Hanks'},
		email: 'nb@keystone.com ',
		password: 'cideraplle234'};

	var newAdmin = new Admin.model(adminData);
	newAdmin.save();
	var adminId = newAdmin._id;
	var token = newAdmin.generateJwt();

  describe('/GET User', () => {
    it('should POST/GET user at /api/user', (done) => {
      var userData = {email: 'test@gmail.com',
        name: {first: 'Zach', last: 'Shields'}}
      var newUser = new User.model(userData);
      newUser.save();
      var query = {name: {first: 'Zach', last: 'Shields'}}
      chai.request(app)
        .post('/api/user')
			  .set({ Authorization: `Bearer ${token}`})
        .send(query)
        .end((err, res) => {
 					res.should.have.status(200);
					assert.equal(res.body.length, 1);
					let user = res.body[0];
					assert(user.email === 'test@gmail.com');
					assert(user.name.first === 'Zach');
					assert(user.name.last === 'Shields');
          done();
        });
    });
  });

  after((done) => {
    Admin.model.remove({}, (err, data) => {});
    User.model.remove({}, (err, data) => {});
    done();
  });



});
