const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ['costumer', 'admin'],
    default: 'costumer',
},
  name: {
    type: String,
    nested:{
      firstName: { type: String },
      lastName: { type: String }
    },
    ltrim: true,
    rtrim: true,
    lowercase: true,
    required: true,
    minLength: 2,
    validate(value) {
        if (!validator.isAlphanumeric(value, 'pl-PL')) {
            throw new Error('Name cannot contain special characters.')
        }
    }
},

  email: {
    type: String,
    require: true,
    unique: true,
    ltrim: true,
    rtrim: true,
    lowercase: true,
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
//find user object
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return userObject;
}
//add user token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  // console.log(user._id);
  const token = jwt.sign({ _id: user._id.toString() }, process.env.TOKEN_SECURITY);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  // console.log(token);
  return token;
}


//validation of user=> email, password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await usermodel.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error('unable to login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('unable to login');
  }
  return user;
};

//script user password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.details.password = await bcrypt.hash(user.password, 8)
  }
  next();
})

//make conection between user and project

userSchema.virtual('projects', {
  ref: 'project',
  localField: '_id',
  foreignField: 'owner',
})

const User = mongoose.model('users', userSchema);
module.exports = User;