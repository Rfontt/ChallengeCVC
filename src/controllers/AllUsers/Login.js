const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ModelUser = require('../../models/Users/Users');
require('dotenv').config();

async function Login(req, res) {
  var { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send({
      Message: "Bad request. Fields undefined."
    })
  }

  var emailExists = await ModelUser.FindByEmail(email);

  if (emailExists) {
    let passwordExists = await bcrypt.compare(password, emailExists.password);

    if (passwordExists) {
      let generateToken = await jwt.sign({
         email: emailExists.email, role: emailExists.role },
         process.env.JWT_KEY);

      let userName = emailExists.name;
      let userEmail = emailExists.email;

      res.status(200).send({
        token: generateToken,
        name: userName,
        email: userEmail
      })
    }else{
      res.status(406).send({
        Message: "Incorrect password"
      })
    }
  }else {
    res.status(404).send({
      Message: "Email not exists"
    })
  }
}

module.exports = Login;
