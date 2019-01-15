const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Workout.find(req.query)
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Workout.findById(req.params.id)
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Workout.create(req.body)
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workout.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Workout.findById(req.params.id)
      .then(dbWorkout => dbWorkout.remove())
      .then(dbWorkout => res.json(dbWorkout))
      .catch(err => res.status(422).json(err));
  }
};
