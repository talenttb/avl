// const data = require('../../data.json');
const restaurants_model = require('../model/restaurants')

function isEmpty(value) {
  return typeof value == 'string' && !value.trim() ||
      typeof value == 'undefined' || value === null;
}

module.exports = (req, res) => {
  const query_string = req.query;
  let q_time = new Date();
  if (!isEmpty(query_string.query_time)) {
    q_time = new Date(query_string.query_time.replace(' ', '+'));
  }
  restaurants_model.get_restaurants(q_time).then(result => {
    res.status(200).json(result);
  });
};