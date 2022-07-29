/* const express = require('express')
const router = express.Router()  */

/* const {Router} = require('express')
const router = Router() */

// const router = require('express').Router()


const { intro, portfolio, about, contact,portfolioDetail } = require('../controllers/index.controller')
/* exporto */  /* declaro router */  /* requiero express ejecutando el método Router */
module.exports = router = require('express').Router()
  .get('/', intro)
  .get('/portfolio', portfolio)
  .get('/about', about)
  .get('/contact', contact)

  /* Ruta parametrizada */
  .get('/portfolio/:id', portfolioDetail)
