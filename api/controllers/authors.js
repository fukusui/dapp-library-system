var keystone = require('keystone');

module.exports.authors = (req, res) => {
  var Author = keystone.list('Author');
  let authors = Author.model.find({});
  authors.exec((err, authors) => {
    if(err) res.send(err);
    res.json(authors);
  });
}

module.exports.author = (req, res) => {
  var Author = keystone.list('Author');
  let author = Author.model.findById(req.params.id, (err, author) => {
    if(err) res.send(err);
    res.json(author);
  });
}

module.exports.search = (req, res) => {
  var Author = keystone.list('Author');
	Author.model.find(req.body, (err, author) => {
    if(err) res.send(err);
	  res.json(author);
  });
}
