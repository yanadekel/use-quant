const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/user.route');
const projectsRouter = require ('./routes/project.route')
const path = require('path');
const fileRouter = require('./routes/file.route');




const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/useQuant/users', usersRouter); 
app.use('/api/useQuant/projects', projectsRouter); 
app.use('/api/useQuant/fils', fileRouter); 


// app.get('/', (req,res)=>{
   
//     res.json({success : 'useQuant API'});
// })

const port = 8000;
const uri = "mongodb+srv://YANA:72877287@use-quant.eurzl.mongodb.net/UseQuantDB?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("database connect") 
});

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
