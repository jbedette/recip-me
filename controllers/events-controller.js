const Event = require('../models/event');

const eventsController = {};

eventsController.index = (req, res) => {
  Event.findAll()
    .then(events => {
      res.render('events/index-events', { events: events });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = eventsController;
