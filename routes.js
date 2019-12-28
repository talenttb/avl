const express = require('express')
const router = express.Router()

const restaurants = require('./service/restaurants');

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.get('/restaurants', restaurants);

module.exports = router