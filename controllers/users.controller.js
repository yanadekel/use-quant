const User = require('../models/user.model');




const sighnInUser = async (req, res) => {

  const { name, email, password } = req.body;

  
  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });

  } catch (e) {
    res.status(400).send(e);
  }
}


const login = async (req, res) => {
  const { email, password } = req.body;
  if (email == null || password == null) {
    return res.status(404).send('Invalid login details');
  }

  try {

    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });

  } catch (err) {
    res.status(400).send(err.message);
  }
}

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
}

const logoutAll = async (req, res) => {

  const user = req.user;
  try {
    user.tokens = [];
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
}


const updateDetails = async (req, res) => {

  const updates = Object.keys(req.body);
  const alloweUpdates = ["name", "password", "email"];
  const isValidOpertion = updates.every((update) => alloweUpdates.includes(update));

  if (!isValidOpertion) {
    return res.status(400).send({ error: 'Invelid updates' })
  }

  try {

    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    res.status(200).send(req.user);

  } catch (e) {
    res.status(404).send('invelid');
  }


}


const deleteUser = async (req, res) => {
  try {
    await req.user.remove();

    res.send(req.user);
  }

  catch (e) {
    res.status(500).send();
  }
}


module.exports = {
  addUser: sighnInUser,
  userLogin: login,
  userLogout: logout,
  logoutAll,
  updateUser: updateDetails,
  deleteUser
}