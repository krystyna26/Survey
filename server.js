//setup express
let express = require('express');
let app = express();

//setup path
const path = require('path');

// body parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// static folder
app.use(express.static(path.join(__dirname, './client/dist')));
app.use(express.static(path.join(__dirname, './static')));

// mongo DB
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// port
app.listen(8000, function() {
    console.log("listening on port 8000");
})