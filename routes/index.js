const express = require('express');
const router = express.Router();
const User = require("../models/user");
const Pet = require("../models/pet");
const Hotel = require("../models/hotel");
const Shop = require("../models/shop");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/home', (req, res, next) => {
  Shop.find()
  .then(shops => {
    Hotel.find()
    .then(hotels => {
      res.render("home", { shops, hotels });

    })
    .catch();
  })
  .catch(error => {
  })
});

router.get('/services', (req, res, next) => {
  res.render('services');
});

router.get('/shop', (req, res, next) => {
  res.render('forms/shop');
});

// User form GET and POST
router.get('/user', (req, res, next) => {
  res.render('forms/user');
});

router.post('/user', (req, res, next) => {
  const { CPF, name, lastName, adress:streetAddress, address:city, address:state, address:cep, phone } = req.body;
  console.log(req.body);
  const newUser = new User({ CPF, name, lastName, adress:streetAddress, address:city, address:state, address:cep, phone });
  newUser.save()
  .then(() => {
    res.redirect('/home');
  })
  .catch((error) => {
    console.log(error);
  })
});

// Pet form GET and POST
router.get('/pet', (req, res, next) => {
  res.render('forms/pet');
});

router.post('/pet', (req, res, next) => {
  const { name, type, race, size, age, genero, cor } = req.body;
  console.log(req.body);
  const newPet = new Pet({ name, type, race, size, age, genero, cor });
  newPet.save()
  .then(() => {
    res.redirect('/home');
  })
  .catch((error) => {
    console.log(error);
  })
});

// Hotel form GET and POST
router.get('/hotel', (req, res, next) => {
  res.render('forms/hotel');
});

router.post('/hotel', (req, res, next) => {
  const { name, CNPJ, address:streetAddress, address:city, address:state, address:cep } = req.body;
  console.log(req.body);
  const newHotel = new Hotel({ name, CNPJ, address:streetAddress, address:city, address:state, address:cep });
  newHotel.save()
  .then(() => {
    res.redirect('/home');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
