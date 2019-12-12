var express = require('express');
var router = express.Router();
var LibContract = require('../controllers/libContract');
var keystone = require('keystone');

module.exports.auth = (router) => {
  router.post('/api/session/signin', async (req, res, next) => {
    try {
      var Admin = keystone.list('Admin');
      var admin = await Admin.model.findOne({email: req.body.email});
      var address = admin.address;
      var employee = await LibContract.getEmployee(address);
      if(employee >= 1) {
        next();
      } else {
        res.status(401);
        res.json({error: 'You are Unauthorized!'});
      }
    } catch(e) {
      console.log(e);
      res.status(401);
      res.json({error: 'You are Unauthorized!'});
    }
  });

  router.post('/api/admins/:adminId', async (req, res, next) => {
    var address = req.user.address;
    var employee = await LibContract.getEmployee(address);
    if(employee == 2) {
      next();
    } else {
      res.status(401);
      res.json({error: 'You are Unauthorized!'});
    }
  });
};
