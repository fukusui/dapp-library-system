var keystone = require('keystone');

module.exports.search = (req, res) => {
  var User = keystone.list('User');
	User.model.find(req.body, (err, user) => {
    if(err) res.send(err);
	  res.json(user);
  });
}

module.exports.id = (req, res) => {
  var User = keystone.list('User');
  User.model.findById(req.params.id, (err, user) => {
    if(err) res.send(err);
    res.json(user);
  });
}

module.exports.checkout = (req, res) => {
  var User = keystone.list('User');
  User.model.findById(req.body.id, (err, user) => {
    if(err) throw err;
    user.due_books.push(req.body.instanceId);
    user.save();
    res.json(user);
  });
}

module.exports.return = (req, res) => {
  var User = keystone.list('User');
  User.model.findById(req.body.id, (err, user) => {
    if(err) throw err;
    user.due_books.splice(user.due_books.indexOf(req.body.due_books), 1);
    user.save();
    res.json(user);
  });
}
