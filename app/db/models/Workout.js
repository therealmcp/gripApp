var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var WorkoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Workout = mongoose.model("Workout", WorkoutSchema);

// Export the Article model
module.exports = Workout;
