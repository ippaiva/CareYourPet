const express = require('express');

const router = express.Router();
const User = require('../models/user');
const Pet = require('../models/pet');
const Hotel = require('../models/hotel');
const Shop = require('../models/shop');
const ensureAuthenticated = require('./authenticated');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/auth/reset', (req, res, next) => {
  res.render('/auth/reset');
});

router.get('/home', ensureAuthenticated, (req, res, next) => {
  // const userInfo = req.user;
  console.log("OLOOOKO", req.user);

  Shop.find()
    .then((shops) => {
      Hotel.find()
        .then((hotels) => {
          res.render('home', { shops, hotels });
        })
        .catch((error) => {
        });
    });
});

router.get('/services', ensureAuthenticated, (req, res, next) => {
  res.render('services');
});

router.get('/profile', ensureAuthenticated, (req, res, next) => {
  User.findOne({ _id: req.session.passport.user })
  .then((user) => {
    console.log(user);
    res.render('profile', {user});
  })
  .catch((error) => {
    console.log(error);
  })
});

// router.get('/shop', ensureAuthenticated, (req, res, next) => {
//   User.findOne({ _id: req.session.passport.user })
//   .then((user) => {
//     console.log(user);
//     res.render('forms/shop', {hotel, shop});
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// });

// Shop Details GET
router.get('/details/:id', ensureAuthenticated, (req, res, next) => {
  console.log("esse é o conteudo do shop req.parms", req.params.id);
  Shop.findOne({ _id: req.params.id })
  .then((shop) => {
    console.log("esse é shop do get details", shop.services);
    res.render('details', { shop });
  })
  .catch((error) => {
    console.log(error);
  })
});

// // Hotel Details GET
// router.get('/details/:id', ensureAuthenticated, (req, res, next) => {
//   console.log("esse é o conteudo do hotel req.parms", req.params.id);
//   Hotel.findOne({ _id: req.params.id })
//   .then((hotel) => {
//     console.log("esse é hotel do get details", hotel);
//     res.render('details', { hotel });
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// });

// User form GET and POST
router.get('/user', ensureAuthenticated, (req, res, next) => {
  User.findOne({ _id: req.user.id })
    .then((user) => {
      res.render('forms/user', { user });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post('/user', ensureAuthenticated, (req, res, next) => {
  const { CPF, name, lastName, streetAddress, city, state, cep, phone } = req.body;

  User.findByIdAndUpdate({ _id: req.session.passport.user }, { CPF, name, lastName, streetAddress, city, state, cep, phone })
    .then(() => {
      res.redirect('/home');
    })
    .catch((error) => {
      console.log(error);
    });
});

// router.get('/pets', ensureAuthenticated, (req, res, next) => {
//   console.log("isso são os dados de user em pets", req.name)
//   User.findOne({ _id: req.user.id })
//   .then((user) => {
//     console.log("isso são os pets depois do findOne", user.name );
//     res.render('pets', {user} );
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// });

// Pet form GET and POST
router.get('/pet', ensureAuthenticated, (req, res, next) => {
  User.findOne({ _id: req.session.passport.user })
  .then((user) => {
    res.render('forms/pet', {user});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post('/pet', ensureAuthenticated, (req, res, next) => {
  const { name, type, race, size, age, genero, cor } = req.body;
  console.log("esse é o req body", req.body);
  const newPet = new Pet( { owner: req.session.passport.user, name, type, race, size, age, genero, cor });

  newPet.save()
    .then(() => {
      console.log("esse é o newPet", newPet);
      User.findByIdAndUpdate({ _id: req.session.passport.user }, { $push: {pet: [newPet._id]} })
      .then(() => {
        res.redirect('/home');
      })
    .catch((error) => {
      console.log(error);
    });
  });
});




// Hotel form GET and POST
router.get('/hotel', ensureAuthenticated, (req, res, next) => {
  res.render('forms/hotel');
});

router.post('/hotel', ensureAuthenticated, (req, res, next) => {
  const { name, CNPJ, address: streetAddress, address: city, address: state, address: cep } = req.body;
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
