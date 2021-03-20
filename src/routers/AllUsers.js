const express = require('express');
const alluser = express.Router();

const LoginController = require('../controllers/AllUsers/Login');
const WelcomeUserController = require('../controllers/AllUsers/WelcomeUser');
const AuthorizationAllUsers = require('../middleware/AuthorizationAllUsers');

alluser.post("/login", LoginController);
alluser.get("/home", AuthorizationAllUsers, WelcomeUserController);

module.exports = alluser;
