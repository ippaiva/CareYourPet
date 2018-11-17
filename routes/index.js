const express = require('express');
const router = express.Router();

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

module.exports = router;
