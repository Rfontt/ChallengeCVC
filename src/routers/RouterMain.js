const express = require('express');
const router = express.Router();
const UsersCommom = require('./UsersCommom');
const UsersAdm = require('./UsersAdm');
const AllUsers = require('./AllUsers');

router.use(UsersCommom);
router.use(UsersAdm);
router.use(AllUsers);

module.exports = router;
