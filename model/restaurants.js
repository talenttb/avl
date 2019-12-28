// import {client} from './db'
const db = require('./db').db
const Query = require('pg').Query

const get_restaurants = (query_time = Date.now()) => {
  return db
      .query(
          `
  select * from restaurants r
  join restaurants_schedules s on r.id = s.r_id
  where s.is_open = true
  and s.week_of_day = $1
  and s.start_time <= $2 and s.end_time >=$3`,
          [query_time.getDay(), query_time, query_time])
      .then(res => {
        return res.rows;
      })
      .catch(e => console.error(e.stack))
};

module.exports = {get_restaurants};