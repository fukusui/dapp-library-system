var keystone = require('keystone');

module.exports.genres = (req, res) => {
var Genre = keystone.list('Genre');
  let genres = Genre.model.find({});
  genres.exec((err, genres) => {
    if(err) res.send(err);
    res.json(genres);
  });
}

module.exports.genre = (req, res) => {
  var Genre = keystone.list('Genre');
  let genre = Genre.model.findById(req.params.id, (err, genre) => {
    if(err) res.send(err);
    res.json(genre);
  });
}
