var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SessionSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  clientWeight: {
    type: Number,
  },
  clientBodyFat: {
    type: Number,
  },
  calories: {
    type: Number
  },
  notes: {
    type: String,
  },
  workouts: {
    type: Schema.Types.ObjectId,
    ref: "Workouts"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Session = mongoose.model("Session", SessionSchema);

// Export the Article model
module.exports = Session;
