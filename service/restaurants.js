// const data = require('../../data.json');
const restaurants_model = require('../model/restaurants')

module.exports = (req, res) => {
  const query_string = req.query;
  restaurants_model
      .get_restaurants(
          query_time = new Date(query_string.query_time.replace(' ', '+')))
      .then(result => {
        res.status(200).json(result);
      });
};