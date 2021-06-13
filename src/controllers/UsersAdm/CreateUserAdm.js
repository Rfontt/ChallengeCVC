const express = require('express');
const ModelUser = require('../../models/Users/Users');

async function CreateUsersAdm(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).send({
      Message: "Bad request. Fields undefined."
    })
  }

  var emailAlreadyExists = await ModelUser.FindByEmail(email);

  if (emailAlreadyExists) {
    res.status(406).send({
      Message: "Email already exists"
    })
  }else{
    await ModelUser.CreateUserAdm(name, email, password);

    res.status(201).send({
      Message: "User created with sucess"
    })
  }
}

module.exports = CreateUsersAdm;
