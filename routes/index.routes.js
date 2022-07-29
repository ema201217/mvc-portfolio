/* const express = require('express')
const router = express.Router()  */

/* const {Router} = require('express')
const router = Router() */

// const router = require('express').Router()


const { index } = require('../controllers/index.controller')
/* exporto */  /* declaro router */  /* requiero express ejecutando el método Router */
module.exports = router = require('express').Router()
  .get('/', index)
