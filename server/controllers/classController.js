const User = require('../models/user');
const express = require('express');
const session = require('express-session');
const Class = require('../models/class');

module.exports.getClasses = async function(req, res) {
    // '10052019' is for testing furpose only.
    const classes = await Class.find({ teacherId: '10052019' });
    if (Object.keys(classes).length > 0) {
        res.json(classes);
    } else {
        res.json({
            status: 'Empty'
        });
    }
};

module.exports.getClassStudents = async function(req, res) {
    const managedClass = await Class.findOne({ classId: req.params.id });
    res.json(managedClass['studentIds']);
};
