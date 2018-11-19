const express = require('express');
const router = express.Router();
const user = require("../models/user")

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

router.post('/forms/user', (req, res, next) => {
  const { address1, city, state, cep } = req.body;
  const newUser = new User({ address1, city, state, cep})
  newUser.save()
  .then(() => {
    res.redirect('/home');
  })
  .catch((error) => {
    console.log(error);
  })
});

module.exports = router;
