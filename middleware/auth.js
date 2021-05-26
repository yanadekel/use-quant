const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
// require('dotenv').config();
//process.env.TOKEN_SECURITY;

const auth = async (req, res, next) => {
  try {
    console.log("Middleware.auth")
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'thisismytoken');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    console.log(token)
    next();

  } catch (e) {
    res.status(401).send({ error: 'please authenticate' })
  }
}

module.exports = auth;