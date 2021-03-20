const express = require('express');

function WelcomeUser(req, res) {
  res.json({
    Message: "Welcome, friend. We are very pleased to have you here."
  })
}

module.exports = WelcomeUser;
