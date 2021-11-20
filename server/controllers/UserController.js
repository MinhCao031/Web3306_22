const User = require('../models/User');
const express = require('express');
const session = require('express-session');

module.exports.login = async function (req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    const response = {
      auth: true,
      username: user.username,
      name: user.name,
      role: user.role,
    };
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
  // res.redirect('/home');
};

module.exports.logout = async function (req, res) {
  req.session.destroy();
  if (req.session) {
    return res.json({ message: 'Something went wrong!' });
  } else {
    return res.json({ success: true });
  }
};

module.exports.update = async function (req, res) {
  const query = { username: req.params.user_id };
  const update = {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    dateOfBirth: req.body.dateOfBirth,
    fieldOfStudy: req.body.fieldOfStudy,
    introduction: req.body.introduction,
  };
  try {
    const user = await User.findOneAndUpdate(query, update);

    try {
      await user.save();
      res.status(200).json({ success: true });
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.setPassword = async function (req, res) {
  isValid = await User.findAndValidate(
    req.params.user_id,
    req.body.oldPassword
  ).catch((err) => {
    res.status(500).json(err);
  });

  if (isValid) {
    const user = await User.findOne({ username: req.params.user_id }).catch(
      (err) => {
        res.status(500).json(err);
      }
    );

    user.password = req.body.newPassword;
    await user.save().catch((err) => {
      res.status(500).json(err);
    });
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
};

module.exports.getInfo = async function (req, res) {
  const user = await User.findOne({ username: req.params.user_id }).catch(
    (err) => {
      return res.status(500).json(err);
    }
  );

  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: 'Can not find required user' });
  }
};

//codeTT
module.exports.importFile = async function (req, res) {
  var arr = req.body.inpjson;
  for (var i = 0; i < arr.length; i++) {
    console.log(i);
    var obj = arr[i];
    const {
      id,
      dateOfBirth,
      drl,
      gender,
      gpa,
      hometown,
      level,
      name,
      username,
    } = obj;
    const user = new User({
      username: username,
      password: username,
      level: level,
      name: name,
      dateOfBirth: dateOfBirth,
      gender: gender,
      hometown: hometown,
      gpa: gpa,
      drl: drl,
    });
    console.log(arr[i], i);
    await user
      .save()
      // .then(() => {
      //   return res.json({ status: 'OK' });
      // })
      .catch((err) => {
        const response = {
          error: err,
          status: 'Failed',
        };
        console.log(response);
        return res.json(response);
      });

    // user
    //     .save()
    //     .then((data) => {
    //         console.log(data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
  }
  return res.redirect(`/api/classes/${req.body.classId}/students`);
};
