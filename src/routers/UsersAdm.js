const express = require('express');
const useradm = express.Router();

const CreateUserAdmController = require('../controllers/UsersAdm/CreateUserAdm');
const FindAllUsersController = require('../controllers/UsersAdm/FindAllUsers');
const AuthorizationUserAdm = require('../middleware/AuthorizationUserAdm');

useradm.post("/useradm", CreateUserAdmController);
useradm.get("/useradm", AuthorizationUserAdm, FindAllUsersController);


module.exports = useradm;
