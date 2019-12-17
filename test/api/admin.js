var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();

var Admin = keystone.list('Admin');

describe('Admin Test', () => {
    var adminData = {
			address: '0x449aBdD847e0f264105Abde330dFEaC1602033f6',
			name: {first: 'Tom', last: 'Hanks'},
			email: 'nb@keystone.com ',
      password: 'cideraplle234'};
    var newAdmin = new Admin.model(adminData);
		newAdmin.save();

	describe('Admin authentication', () => {
		it('it should not /POST without correct credentials', (done) => {
		 	chai.request(app)
				.post('/api/office/login')
				.send({email:'nb@keystone.com'})
				.end((err, res) => {
					res.should.have.status(401);
					done();
			});
		});

   	it('it should /POST an Admin with correct credentials',
			(done) => {
       chai.request(app)
        .post('/api/office/login')
        .send({email: adminData.email, password: adminData.password})
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });

	});

	describe('/GET Admin profile', () => {
		it('it should not GET without authorization', (done) => {
			chai.request(app)
        .get('/api/office/profile')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
    it('it should /GET Admin profile with correct credentials', (done) => {
      chai.request(app)
        .post('/api/office/login')
        .send(adminData)
        .end((err, res) => {
          res.body.should.have.property('token');
          token = res.body.token;
          chai.request(app)
						.get('/api/office/profile')
						.set({ Authorization: `Bearer ${token}`})
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done()
            });
        });
    });
  });

	after((done) => {
		Admin.model.remove({}, (err) => {});
		done();
	});

});
