const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
  project_name: {
    type: String,
    trim: true,
    require: true,
    lowercase: true

  },

  email: {
    type: String,
    require: false,
    unique: true,
    ltrim: true,
    rtrim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Not A valid email");
      }
    }
  },

  password: {
    type: String,
    required: true,

    validate(value) {

      if (!validator.isStrongPassword(value)) {
        throw new Error("Not A valid,need:minlength(8), minLettarupper(1),minLettarLow(1),minNum(1),minSym(1)");
      }
    }

  },

  isActive: {
    type: Boolean,
    required: false,
    unique: false,
    default: true
  },

  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]




})

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return userObject;
}

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  // console.log(user._id);
  const token = jwt.sign({ _id: user._id.toString() }, 'thismytoken');
  user.tokens = user.tokens.concat({ token });
  await user.save();
  // console.log(token);
  return token;
}



userSchema.statics.findByCredentials = async (email, password) => {
  const user = await usermodel.findOne({ 'details.email': email });
  console.log(user);
  if (!user) {
    throw new Error('unable to login');
  }
  const isMatch = await bcrypt.compare(password, user.details.password);
  if (!isMatch) {
    throw new Error('unable to login');
  }
  return user;
};


userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('details.password')) {
    user.details.password = await bcrypt.hash(user.details.password, 8)
  }
  next();
})
const usermodel = mongoose.model('users', userSchema);
module.exports = usermodel;