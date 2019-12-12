var keystone = require('keystone');

module.exports.login = async (req, res) => {
  var token;
  var Admin = keystone.list('Admin');

  var admin = await Admin.model.findOne({email: req.body.email});
  if(!admin){
    res.status(401).json('admin not found');
  } else {
    admin._.password.compare(req.body.password,
			function(err, checked_password) {
      if(!checked_password) {
        res.status(404)
      } else {
        token = admin.generateJwt();
        res.status(201);
      	res.json({
					"token" : token
				});
      }})}};

module.exports.profile = (req, res) => {
  var Admin = keystone.list('Admin');
  if (!req.payload) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    Admin.model
      .findById(req.payload._id)
      .exec(function(err, admin) {
        res.status(200).json(admin);
      });
  }
};

module.exports.all = (req, res) => {
  var Admin = keystone.list('Admin');
  var admins = Admin.model.find({});
  admins.exec((err, admins) => {
    if(err) res.send(err);
    res.json(admins);
  });
};

module.exports.id = (req, res) => {
  var Admin = keystone.list('Admin');
  Admin.model.findById(req.params.id, (err, admin) => {
    if(err) res.send(err);
    res.json(admin);
  });
}
