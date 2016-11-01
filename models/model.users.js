'use strict'

const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  username : String,
  emai     : {
    type  : String,
    unique: true
  },
  password : String
});

module.exports = Users = mongoose.model('Users', UserSchema)
