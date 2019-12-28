// import {client} from './db'
const client = require('./db')
const Query = require('pg').Query

const get_restaurants = () => {
  const query = new Query('select * from restaurants');
  const result = client.query(query)
  return result;
};

module.exports = {
  get_restaurants: get_restaurants
};