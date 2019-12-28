// import {client} from './db'
const db = require('./db').db
const Query = require('pg').Query

const get_restaurants = () => {
  return db.query('select * from restaurants')
      .then(res => {
        return res.rows;
      })
      .catch(e => console.error(e.stack))
};

module.exports = {get_restaurants};