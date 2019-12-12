var express = require('express'),
    engines = require('consolidate'),
    keystone = require('keystone'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    cors = require('cors'),
    path = require('path');

var keystoneConfig = require('./config/keystone'),
		dbUrl = require('./config/database'),
		routes = require('./api/routes/index'),
    adminRoutes = require('./api/routes/adminRoutes'),
    indexCtrl = require('./api/controllers/index'),
    app = express();

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
//View Template//
app.set('views', path.join(__dirname, 'public/dist'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//Middleware//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Static assets//
app.use('/', express.static(path.join(__dirname, 'public/dist')));
app.use('static', express.static(path.join(__dirname, 'public/asset')));

//Routes
app.get('/', indexCtrl.index);
app.get('/office', indexCtrl.index);
app.get('/office/login', indexCtrl.index);
app.use('/api', routes);

//Error Handling
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
}});

app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something broke!');
});

//Keystone Setup//
keystone.init(keystoneConfig);
keystone.set('mongo', dbUrl.db[process.env.NODE_ENV]);
keystone.set('cookie secret', process.env.COOKIE);
keystone.set('port', process.env.PORT);
keystone.import('api/models');
keystone.set('routes', app);
keystone.set('pre:adminroutes', adminRoutes.auth);
keystone.start();
//Export Server
module.exports = keystone;
