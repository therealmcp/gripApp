var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TrainerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  sessions: {
    type: Schema.Types.ObjectId,
    ref: "Sessions"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Trainer = mongoose.model("Trainer", TrainerSchema);

// Export the Article model
module.exports = Trainer;
