var keystone = require('keystone');

module.exports.books = (req, res) => {
  var Book = keystone.list('Book');
  let books = Book.model.find({});
  books.exec((err, books) => {
    if(err) res.send(err);
    res.json(books);
  });
}

module.exports.book = (req, res) => {
  var Book = keystone.list('Book');
  let book = Book.model.findById(req.params.id, (err, book) => {
    if(err) res.send(err);
    res.json(book);
  });
}

module.exports.search = (req, res) => {
  var Book = keystone.list('Book');
	Book.model.find(req.body, (err, book) => {
    if(err) res.send(err);
	  res.json(book);
  });
}
