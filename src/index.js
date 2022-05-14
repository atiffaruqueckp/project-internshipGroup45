//importing part

const express = require('express'); //it is a free and open source web application framework for node.js.manage a wep application.
const bodyParser = require('body-parser'); // this is a Node.js body parsing middleware for handling data of req, res before you handle it.
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();                                      //create a object(app) from  express and we call a express.


// middleware set up

app.use(bodyParser.json());                                 // data handle for json format
//app.use(bodyParser.urlencoded({ extended: true }));     //this function is a middleware for parsing bodies from URL.


//connecting with monodb database

mongoose.connect("mongodb+srv://taabish:lkmgsyjhwbQYgkvX@cluster0.cp3ka.mongodb.net/atif1234?retryWrites=true&w=majority", {
    useNewUrlParser: true        // it allow to user to fall back to the old parser if they find a bug in the new parser.
})                              // you should set usenewurlparser:true unless that prevents you from connecting.creating new db.
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

//for starting a server

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});