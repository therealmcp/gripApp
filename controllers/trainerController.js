const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Trainer.find(req.query)
      .then(dbTrainer => res.json(dbTrainer))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Trainer.findById(req.params.id)
      .then(dbTrainer => res.json(dbTrainer))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Trainer.create(req.body)
      .then(dbTrainer => res.json(dbTrainer))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Trainer.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbTrainer => res.json(dbTrainer))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Trainer.findById(req.params.id)
      .then(dbTrainer => dbTrainer.remove())
      .then(dbTrainer => res.json(dbTrainer))
      .catch(err => res.status(422).json(err));
  }
};
