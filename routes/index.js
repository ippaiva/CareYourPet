const express = require('express');
const router = express.Router();
const User = require("../models/user")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/home', (req, res, next) => {
  res.render('home');
});

router.get('/services', (req, res, next) => {
  res.render('services');
});

router.get('/hotel', (req, res, next) => {
  res.render('forms/hotel');
});

router.get('/pet', (req, res, next) => {
  res.render('forms/pet');
});

router.get('/shop', (req, res, next) => {
  res.render('forms/shop');
});

// User form GET and POST
router.get('/user', (req, res, next) => {
  res.render('forms/user');
});

router.post('/user', (req, res, next) => {
  const { CPF, name, lastName, street.streetAddress, city, state, cep, phone } = req.body;
  console.log(req.body);
  const newUser = new User({ CPF, name, lastName, streetAddress, city, state, cep, phone })
  newUser.save()
  .then(() => {
    res.redirect('/home');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
