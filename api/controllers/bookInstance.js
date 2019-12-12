var keystone = require('keystone');

module.exports.create = (req, res) => {
  var Instance = keystone.list('BookInstance');
  var newInstance = new Instance.model(req.body);
  newInstance.save();
  res.status(201).json({ message: 'Instance created!', newInstance});
}

module.exports.search = (req, res) => {
  var Instance = keystone.list('BookInstance');
  Instance.model.find(req.body, (err, instance) => {
    if(err) res.send(err);
	  res.json(instance);
  });
}

module.exports.instances = (req, res) => {
  var Instance = keystone.list('BookInstance');
  let instances = Instance.model.find({});
  instances.exec((err, instances) => {
    if(err) res.send(err);
    res.json(instances);
  });
}

module.exports.instance = (req, res) => {
  var Instance = keystone.list('BookInstance');
  let instance = Instance.model.findById(req.params.id, (err, instance) => {
    if(err) res.send(err);
    res.json(instance);
  });
}

module.exports.checkout = (req, res) => {
  var Instance = keystone.list('BookInstance');
  Instance.model.findById(req.body.id, (err, instance) => {
		if(err) throw err;
    instance.availability = req.body.availability;
		instance.due_date = req.body.due_date;
		instance.current_barrower = req.body.current_barrower;
    instance.past_barrower.push(req.body.past_barrower);
    instance.save((err) => {
    	if (err) throw err;
      res.json(instance);
    });
  });
}

module.exports.returnBook = (req, res) => {
  var Instance = keystone.list('BookInstance');
  Instance.model.findById(req.body.id, (err, instance) => {
		if(err) throw err;
      instance.availability = req.body.availability;
      instance.due_date = null;
      instance.current_barrower = null;
      instance.save((err) => {
    	  if (err) throw err;
        res.json(instance);
    });
  });
}
