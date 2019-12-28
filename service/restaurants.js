// const data = require('../../data.json');
const restaurants_model = require('../model/restaurants')

module.exports = (req, res) => {
  restaurants_model.get_restaurants().then(result => {
    console.log(result);
    res.status(200).json(result);
  });
};