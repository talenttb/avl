const express = require('express')
const router = express.Router()

const restaurants = require('./service/restaurants');

router.get('/restaurants', restaurants);

module.exports = router