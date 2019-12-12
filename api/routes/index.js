var express = require('express');
var jwt = require('express-jwt');
var router = express.Router();

var ctrlAdmin = require('../controllers/admin');
var ctrlUser = require('../controllers/user');
var ctrlBook = require('../controllers/book');
var ctrlBooks = require('../controllers/books');
var ctrlAuthor = require('../controllers/authors');
var ctrlGenre = require('../controllers/genre');
var ctrlBookInstance = require('../controllers/bookInstance.js');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

var auth = jwt({
  secret: process.env.SECRET || "secretisneeded",
  userProperty: 'payload'
});

//Routes//
router.get('/author',  ctrlAuthor.authors);
router.get('/author/:id',  ctrlAuthor.author);
router.post('/author/search', ctrlAuthor.search);

router.get('/book', ctrlBooks.books);
router.get('/book/:id', ctrlBooks.book);
router.post('/book/create', auth, ctrlBook.post);
router.post('/book/search', ctrlBooks.search);

router.get('/book_instance/',  ctrlBookInstance.instances);
router.get('/book_instance/:id', ctrlBookInstance.instance);
router.post('/book_instance/create', auth, ctrlBookInstance.create);
router.post('/book_instance/search', ctrlBookInstance.search);
router.put('/book_instance/checkout', auth, ctrlBookInstance.checkout);
router.put('/book_instance/return', auth, ctrlBookInstance.returnBook);

router.get('/genre',  ctrlGenre.genres);
router.get('/genre/:id',  ctrlGenre.genre);

router.post('/office/login', ctrlAdmin.login);
router.get('/office/profile', auth, ctrlAdmin.profile);
router.get('/office/employee', auth, ctrlAdmin.all);
router.get('/office/employee/:id', auth, ctrlAdmin.id);

router.post('/user', auth, ctrlUser.search);
router.get('/user', auth, ctrlUser.search);
router.get('/user/:id', auth, ctrlUser.id);
router.put('/user/checkout', auth, ctrlUser.checkout);
router.put('/user/return', auth, ctrlUser.return);

module.exports = router;
