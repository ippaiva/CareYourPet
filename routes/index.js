const express = require('express');

const router = express.Router();
const User = require("../models/user");
const Pet = require("../models/pet");
const Hotel = require("../models/hotel");
const Shop = require("../models/shop");
const ensureAuthenticated = require("./authenticated");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/auth/reset',(req, res, next) => {
  res.render('/auth/reset');
});

router.get('/home', ensureAuthenticated, (req, res, next) => {
  // const userInfo = req.user;
  console.log(req.user);
  res.render("home");
  Shop.find()
  .then(shops => {
    Hotel.find()
    .then(hotels => {
    })
    .catch((error) => {
    });
  });
});

router.get('/services', ensureAuthenticated, (req, res, next) => {
  res.render('services');
});

router.get('/profile', ensureAuthenticated, (req, res, next) => {
  res.render('profile');
});

router.get('/shop', ensureAuthenticated, (req, res, next) => {
  res.render('forms/shop');
});


// User form GET and POST
router.get('/user', ensureAuthenticated, (req, res, next) => {
  console.log("teste do user", req.session);
  User.findOne({ _id: req.query._id})
  .then((user) => {
    console.log(req.user);
    res.render('forms/user', {user});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/user', ensureAuthenticated, (req, res, next) => {
  const { CPF, name, lastName, adress:streetAddress, address:city, address:state, address:cep, phone } = req.body;

  console.log(req.body);

  const newUser = new User({ CPF, name, lastName, adress: streetAddress, address:city, address:state, address:cep, phone });

  newUser.save(req.body.name)
    .then(() => {
      console.log(newUser);
      res.redirect('/home');
    })
    .catch((error) => {
      console.log(error);
    });
});

// Pet form GET and POST
router.get('/pet', ensureAuthenticated, (req, res, next) => {
  res.render('forms/pet', { user: req.user.id });
});

router.post('/pet', ensureAuthenticated, (req, res, next) => {
  const { name, type, race, size, age, genero, cor } = req.body;
  console.log(req.body);
  const newPet = new Pet({ name, type, race, size, age, genero, cor });
  newPet.save()
    .then(() => {
      res.redirect('/home');
    })
    .catch((error) => {
      console.log(error);
    });
});

// Hotel form GET and POST
router.get('/hotel', ensureAuthenticated, (req, res, next) => {
  res.render('forms/hotel');
});

router.post('/hotel', ensureAuthenticated, (req, res, next) => {
  const { name, CNPJ, address:streetAddress, address:city, address:state, address:cep } = req.body;
  console.log(req.body);
  const newHotel = new Hotel({ name, CNPJ, address: streetAddress, address: city, address: state, address: cep });
  newHotel.save()
    .then(() => {
      res.redirect('/home');
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;

