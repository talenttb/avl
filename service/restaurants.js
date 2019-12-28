// const data = require('../../data.json');
const restaurants_model = require('../model/restaurants')
const query_restaurants = (req, res) => {
  res.status(200).json(restaurants_model.query_restaurants());
};

module.exports = (req, res) => {
  res.status(200).json(restaurants_model.query_restaurants());
};