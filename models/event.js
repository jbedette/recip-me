// models/events.js

const db = require('../db/config');

const Event = {};

Event.findAll = () => {
  return db.query('SELECT * FROM events ORDER BY id ASC');
};

module.exports = Event;
