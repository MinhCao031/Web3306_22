const User = require('../models/user');
const express = require('express');
const session = require('express-session');

// This function should be authenticated by middleware function.
module.exports.login = async function (req, res) {
  const user = await User.findOne({ username: req.body.username });
  const data = {
    auth: true,
    username: user.username,
    name: user.name,
    role: user.role,
  };
  res.json(data);
};

// Need to validate request input from client side first, such as whether request's data empty or not.
module.exports.update = async function (req, res) {
  const {
    username,
    name,
    email,
    phoneNumber,
    dateOfBirth,
    fieldOfStudy,
    introduction,
  } = req.body;

  const query = {
    username: username,
  };

  const update = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    dateOfBirth: dateOfBirth,
    fieldOfStudy: fieldOfStudy,
    introduction: introduction,
  };

  const user = await User.findOneAndUpdate(query, update);
  await user
    .save()
    .then(() => res.json({ status: 'OK' }))
    .catch((err) => {
      const response = {
        error: err,
        status: 'Failed',
      };
      res.json(response);
    });
};

module.exports.setPassword = async function (req, res) {
  const { id, password } = req.body;
  const query = {
    username: id,
  };

  const update = {
    password: password,
  };

  const user = await User.findOneAndUpdate(query, update);
  await user
    .save()
    .then(() => res.json({ status: 'OK' }))
    .catch((err) => {
      const response = {
        error: err,
        status: 'Failed',
      };
      res.json(response);
    });
};
