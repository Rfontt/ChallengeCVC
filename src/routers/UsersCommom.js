const express = require('express');
const usercommom = express.Router();

const CreateUserCommomController = require('../controllers/UsersCommom/CreateUserCommom');

usercommom.post("/usercommom", CreateUserCommomController);

module.exports = usercommom;
