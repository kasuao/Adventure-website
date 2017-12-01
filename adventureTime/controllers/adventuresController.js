const db = require("../models");

// Defining methods for the adventuresController
module.exports = {
  findAll: function(req, res) {
    db.Adventure
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Adventure
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findOne: function(req, res) {
    db.Adventure
      .findOne({_id:req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    /* this function allows a page to display adventures by category. It
  chooses that adventure by their category name*/
  //   findOne: function(req, res) {
  //   db.User
  //     .findOne({userName:req.params.userName})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Adventure
    // req.body is form data
      .create(req.body)
      // PUSH new adventure to user.adventures
      /*TODO: change the .'then' to findOneandUpdate user(needs ID) to 
      included the newly created adventure.*/
      .then(function(dbModel){
        // Below userName is the field from the session storage to identify the user
        return db.user.findOneAndUpdate({userName: req.params.username}, {$push: {adventures: dbModel.username}}, { new: true });
      })
      .then(function(dbUser){
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Adventure
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Adventure
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
