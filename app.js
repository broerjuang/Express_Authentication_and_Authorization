'use strict'

//-----------------------------------------------------------
// Express Dependency
//-----------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//-----------------------------------------------------------
// Starting middleware
//-----------------------------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//-----------------------------------------------------------
// Routing
//-----------------------------------------------------------
app.get('/', (req, res) => {
  res.send('Hello World');
})


app.use('/', router)




//-----------------------------------------------------------
// Listen the server
//-----------------------------------------------------------

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server is running on port ', port);
})
