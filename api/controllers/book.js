var keystone = require('keystone');

module.exports.post = async (req, res)  => {
  var Book = keystone.list('Book');
	var genreId = await getGenre(req.body.genres);
  var author_id = getAuthor(req.body.authors);
  var bookData = {
		title: req.body.title,
		author: author_id,
		genre: genreId,
		isbn: req.body.isbn,
		img: req.body.img
	}

	var newBook = new Book.model(bookData);
  newBook.save();
  res.status(201).json({ message: 'Book created!', newBook});
};

function getAuthor(authors) {
	var id_list = [];
	var Author = keystone.list('Author');
  if(authors) {
    for (author of authors) {
      if (author.existingId) {
        id_list.push(author.existingId)
      } else {
        var newAuthor = new Author.model(author);
        id_list.push(newAuthor._id);
        newAuthor.save();
      }
    }
	}
  return id_list;
}

async function getGenre(genres) {
  var Genre = keystone.list('Genre');
  var genreIds = [];
  if(genres) {
    for (genre of genres) {
      var checkGenre = await Genre.model.findOne({name: genre});
      if (!checkGenre) {
        var newGenre = new Genre.model({name: genre});
        newGenre.save();
        genreIds.push(newGenre._id);
      } else {
        genreIds.push(checkGenre._id);
      }
    }
  }
  return genreIds;
}
