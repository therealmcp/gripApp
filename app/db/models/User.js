const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

// Define userSchema
const userSchema = new Schema({
  local: {
    email: {
      type: String,
      unique: false,
      required: false
    },
    password: {
      type:
        String,
      unique: false,
      required: false
    }
  },
  firstName: {
    type: String,
    unique: false
  },
  lastName: {
    type: String,
    unique: false
  },
  // userType: {
  //   user: Boolean
  // },
  // google: {
  //   googleId: {
  //     type: String,
  //     required: false
  //   }
  // },
  photo: {
    type: String,
    required: false
  },
  // local: {
  // 	email: { type: String, unique: true },
  // 	password: { type: String }
  // },
  // google: {
  // 	id: { type: String },
  // 	photos: []
  // },
  // firstName: { type: String },
  // lastName: { type: String }
  client: [{
    type: Schema.Types.ObjectId,
    ref: "Clients"
  }]
})

// Define schema methods
userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.local.password) {
    console.log('=======NO PASSWORD PROVIDED=======')
    next()
  } else {
    this.local.password = this.hashPassword(this.local.password)
    next()
  }
  // this.password = this.hashPassword(this.password)
  // next()
})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User
