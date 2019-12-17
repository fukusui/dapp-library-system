var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();

var Admin = keystone.list('Admin');
var Author = keystone.list('Author');
var Book = keystone.list('Book');
var BookInstance = keystone.list('BookInstance');
var User = keystone.list('User');

describe('Book Instance Test', () => {
	var adminData = {
		address: '0x449aBdD847e0f264105Abde330dFEaC1602033f6',
		name: {first: 'Tom', last: 'Hanks'},
		email: 'nb@keystone.com ',
		password: 'cideraplle234'};
	var newAdmin = new Admin.model(adminData);
	newAdmin.save();
	var adminId = newAdmin._id;
	var token = newAdmin.generateJwt();

  describe('/POST Book Instance', () => {
    it('should /POST Book Instance', (done) => {
      let book = {
        title:"The Google story",
        author: [
          {first_name: "Mark", last_name: "Malseed"},
          {first_name: "Lilly", middle_name: "L", last_name: "Junior"},
          {existingId: "5d812808b2211643bfabadba"}
        ],
        genre: ["Computer Programs", "Spy"],
        isbn: "9780553804577"
      };
      let instanceData  = {
        book: "",
        availability: "available",
        due_date: "",
      };

      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          instanceData.book = res.body.newBook._id;
          chai.request(app)
            .post('/api/book_instance/create')
            .set({ Authorization: `Bearer ${token}`})
            .send(instanceData)
            .end((err, res) => {
              res.should.have.status(201);
              done();
            });
        });
    });
  });

  describe('/GET Book Instance', () => {
    it('should /GET Book Instance', (done) => {
      let book = {
        title:"Metal and Steel",
        author: [{first_name: "George", last_name: "Henderson"}],
        genre: ["Science"],
        isbn: "5660123804577",
        img: "twitter.com"
      };
      let instanceData  = {
        book: "",
        availability: "available",
        due_date: "",
      };

      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          var bookId = res.body.newBook._id;
          instanceData.book = bookId;
          var bookInstance = new BookInstance.model(instanceData);
          bookInstance.save();
          chai.request(app)
            .get('/api/book_instance')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              done();
            });
        });
    });
  });

  describe('/GET/:id Book Instance', () => {
    it('should /GET Book Instance', (done) => {
      let book = {
        title:"Metal and Steel",
        author: [{first_name: "George", last_name: "Henderson"}],
        genre: ["Science"],
        isbn: "5660123804577",
        img: "twitter.com"
      };
      let instanceData  = {
        book: "",
        availability: "available",
        due_date: "",
      };

      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          var bookId = res.body.newBook._id;
          instanceData.book = bookId;
          var bookInstance = new BookInstance.model(instanceData);
          var id = bookInstance._id
          bookInstance.save();
          chai.request(app)
            .get('/api/book_instance/'+ id)
            .end((err, res) => {
              console.log(res.body);
              res.should.have.status(200);
              done();
            });
        });
    });
  });

  describe('/POST Search and GET Book Instance ', () => {
    it('should /GET Book Instance', (done) => {
      let book = {
        title:"Metal and Steel",
        author: [{first_name: "George", last_name: "Henderson"}],
        genre: ["Science"],
        isbn: "5660123804577",
        img: "twitter.com"
      };
      let instanceData  = {
        book: "",
        availability: "available",
        due_date: "",
      };

      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          var bookId = res.body.newBook._id;
          instanceData.book = bookId;
          var bookInstance = new BookInstance.model(instanceData);
          bookInstance.save();
          let query = {book: bookId};
          chai.request(app)
            .post('/api/book_instance/search')
            .send(query)
            .end((err, res) => {
              // console.log(res.body);
              done();
            });
        });
    });
  });

  describe('UPDATE Book Instance', () => {
    it('should /GET Book Instance', (done) => {
      let book = {
        title:"Metal and Steel",
        author: [{first_name: "George", last_name: "Henderson"}],
        genre: ["Science"],
        isbn: "5660123804577",
        img: "twitter.com"
      };
      let instanceData  = {book: "",availability: "available",
        due_date: "",
      };
      chai.request(app)
        .post('/api/book/create')
        .set({ Authorization: `Bearer ${token}`})
        .send(book)
        .end((err, res) => {
          var bookId = res.body.newBook._id;
          instanceData.book = bookId;
          var bookInstance = new BookInstance.model(instanceData);
          var bookInstanceId = bookInstance._id
          bookInstance.save();
          chai.request(app)
            .get('/api/book_instance/'+ bookInstanceId)
            .end((err, res) => {
              res.should.have.status(200);
              var userData = {email: 'test@gmail.com', name: {first: 'Zach', last: 'Shields'}}
              var newUser = new User.model(userData);
              newUser.save();
              var userId = newUser._id;
              let today = new Date();
              let newDate = new Date();
              newDate.setDate(today.getDate()+12);
              let update = {id: bookInstanceId, availability: "lent",
		            due_date: newDate,
		            current_barrower: userId,
                past_barrower: userId
              };
              chai.request(app)
                .put('/api/book_instance/checkout')
                .set({ Authorization: `Bearer ${token}`})
                .send(update)
                .end((err, res) => {
                  // console.log(res.body);
                  let updateUser = {id: userId, instanceId: bookInstanceId};
                  chai.request(app)
                    .put('/api/user/checkout')
                    .set({ Authorization: `Bearer ${token}`})
                    .send(updateUser)
                    .end((err, res) => {
                      let returnData = {
                        id: bookInstance,
                        availability: "available",
                      };
                      chai.request(app)
                        .put('/api/book_instance/return')
                        .set({ Authorization: `Bearer ${token}`})
                        .send(returnData)
                        .end((err, res) => {
                          // console.log(res.body);
                          let userReturn = {
                            id: userId,
                            due_books: bookInstanceId
                          };
                          chai.request(app)
                            .put('/api/user/return')
                            .set({ Authorization: `Bearer ${token}`})
                            .send(userReturn)
                            .end((err, res) => {
                              // console.log(res.body);
                              done();
                            });
                        });
                    });
                });
            });
        });
    })
  });

  afterEach((done) => {
    Admin.model.remove({}, (err, data) => {});
    Author.model.remove({}, (err, data) => {});
    Book.model.remove({}, (err, data) => {});
    BookInstance.model.remove({}, (err, data) => {});
    User.model.remove({}, (err, data) => {});
    done();
  });

});
