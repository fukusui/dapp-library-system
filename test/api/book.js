var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();

var Admin = keystone.list('Admin');
var Author = keystone.list('Author');
var Book = keystone.list('Book');

describe('Book Test', () => {
    var adminData = {
			address: '0x449aBdD847e0f264105Abde330dFEaC1602033f6',
			name: {first: 'Tom', last: 'Hanks'},
			email: 'nb@keystone.com ',
      password: 'cideraplle234'};
		var bookData = {
			title:"The Google story",
			authors: [
				{first_name: "Mark", last_name: "Malseed"},
				{first_name: "Lilly", middle_name: "L", last_name: "Junior"},
				{existingId: "5d812808b2211643bfabadba"}
			],
			genres: ["Computer Programs", "Spy"],
			isbn: "9780553804577"
		};
    var newAdmin = new Admin.model(adminData);
		newAdmin.save();
    var adminId = newAdmin._id;
    var token = newAdmin.generateJwt();

  describe('/POST Book', () => {
		it('should not /POST without token', (done) => {
      chai.request(app)
        .post('/api/book/create')
        .send(bookData)
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });

		it('should /POST with corrcect inputs', (done) => {
      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(bookData)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

	describe('/GET book', (done) => {
    it('should /GET all the books', (done) => {
      chai.request(app)
        .get('/api/book')
        .end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
          done();
        });
    });
  });

	describe('/GET/:id book', () => {
			it('should /GET /:id book', (done) => {
			let book = {
				title:"World Map",
				authors: [],
				genres: ['Geography'],
				isbn: "5660553804577",
				img: "google.com"
			};
			chai.request(app)
				.post('/api/book/create')
				.set({ Authorization: `Bearer ${token}`})
				.send(book)
				.end((err, res) => {
					var id = res.body.newBook._id;
					chai.request(app)
						.get('/api/book/'+ id)
						.end((err, res) => {
							res.should.have.status(200);
						done();
						})
				});
			});
	});

  after((done) => {
		Admin.model.remove({}, (err) => {});
		Author.model.remove({}, (err) => {});
		Book.model.remove({}, (err) => {});
    done();
	});

});
