const express = require('express');
const ModelUser = require('../../models/Users/Users');

async function FindAllUsers(req, res) {
  var users = await ModelUser.FindAllUsers();

  if (users) {
    res.status(200).send({
      Users: users
    })
  }else {
    res.status(404).send({
      Message: "Not users"
    })
  }
}

module.exports = FindAllUsers;
