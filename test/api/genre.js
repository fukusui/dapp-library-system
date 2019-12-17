var chai = require('chai');
var chaiHttp = require('chai-http');
var keystone = require('../../app');
var app = keystone.app;
chai.use(chaiHttp);
chai.should();

describe('Genre Test', () => {
  var Genre = keystone.list('Genre');
  let genreData = {name: "Trojan"};
  var newGenre = new Genre.model(genreData);
  var id = newGenre._id;
  newGenre.save();

  describe('Genre', () => {
    it('should /GET /:id book', (done) => {
      chai.request(app)
        .get('/api/genre/'+ id)
        .end((err, res) => {
          done();
        });
    });
  });

  after((done) => {
    Genre.model.remove({}, (err, data) => {});
		done();
  })

});
