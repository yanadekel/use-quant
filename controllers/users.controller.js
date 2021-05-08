const userModel = require('../models/user.model');


const sighnInUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  try {
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
  const user = req.user
  try {
    user.tokens = [];
    await req.user.save();
    res.send();
  } catch (err) {
    res.status(500).send();
  }
}


const updateDetails = async(req,res) =>{
  const updates = Object.keys(req.body);
  const {id } = req.params; 
  const alloweUpdates = ["name, password, email"];
  const isValidOpertion = updates.every((update) => alloweUpdates.includes(update));
  console.log(account)
  if (!isValidOpertion) {
    return res.status(400).send({ error: 'Invelid updates' })
  }

  try {

    const user = await User.find({ id });
    updates.forEach((update)=>user[update]=req.body[update]);

    await user.save();

    if (!user) {
      return res.status(404).send("not such user")
    }
    res.status(200).send(userUpdate)
  } catch (e) {
    res.status(404).send('invelid');
  }


}


module.exports = {
  addUser: sighnInUser,
  userLogin: login,
  userLogout: logout,
  logoutAll,
  updateUser:updateDetails,
}