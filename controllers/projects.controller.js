const Project = require('../models/project.modal');





const createProject = async (req, res) => {
  const {costumerName , projectName,tableFile, isActive, date } = req.body;

  const project = new Project({
    projectName,
    costumerName,
    tableFile,
    isActive,
    date
  });

  try {
    await project.save();
    // const token = await project.generateAuthToken();
    res.status(201).send({project});

  } catch (e) {
    res.status(400).send(e);
  }
}

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({})
    return res.send(projects)

  } catch (e) {
    res.status(500).send("no users")
  }
}

const getActive = async (req, res) => {
  const isActive = req.query.isActive;
  try {
    const projects = await Project.find({ isActive: isActive });
    return res.status(200).send(projects)

  } catch (e) {
    res.status(500).send();
  }

}

const getProjectById = async (req, res) => {
  const  id  = req.params.id;
  console.log(id);
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).send("Wrong Id");
    }
    return res.status(200).send(project)

  } catch (e) {
    return res.status(200).send("no user")
  }

}

const updateProject = async (req, res) => {
  const updates = Object.keys(req.body);
  const alloweUpdates = ["isActive","projectName","costumerName"];
  const isValidOpertion = updates.every((update) => alloweUpdates.includes(update));

  if (!isValidOpertion) {
    return res.status(400).send({ error: 'Invelid updates' })
  }

  try {

    const project = await Project.findOneAndUpdate(req.params.id, req.body, {new:true,runValidators:true });

    if (!project) {
      return res.status(404).send("not such a project")
    }

    updates.forEach((update) => (project[update] = req.body[update]));
		await project.save();
    res.status(200).json({project:project})
  } catch (error) {
    res.status(400).send({error:'invalid'});
  }
 
}


const deleteProject = async (req, res) => {
  const id = req.params.id;
  try {
      const project = await Project.findByIdAndDelete(id);
      if (!project) {
          return res.status(404).send();
      }

      res.send(project)
  } catch (err) {
      res.status(500).send(err);
  }
}

module.exports = {
  addProject: createProject,
  getAllProjects: getProjects,
  getAllActive: getActive,
  getProject: getProjectById,
  updateProject: updateProject,
  deleteProject
}