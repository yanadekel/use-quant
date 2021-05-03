const userModel = require('../models/user.model');


const sighnInUser = async (req, res) => {
  const { project_name, email, isActive, password} = req.body;

  const user = new userModel({
    
  });

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({user, token});

  } catch (e) {
    res.status(400).send(e);
  }
}


module.exports = {
  addUser: sighnInUser,
 

}