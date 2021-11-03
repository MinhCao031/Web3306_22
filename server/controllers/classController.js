const User = require('../models/user');
const express = require('express');
const session = require('express-session');
const Class = require('../models/class');

module.exports.getClasses = async function(req, res) {
    // '10022019' is for testing furpose only.
    const classes = await Class.find({ teacherId: '10022019' });
    const classCounter = Object.keys(classes).length;
    if (classCounter > 0) {
        const results = [];
        for (let i = 0; i < classCounter; i++) {
            const result = {
                className: classes[i]['className'],
                studentIds: []
            }

            for (let j = 0; j < classes[i]['studentIds'].length; j++) {
                const foundStudent = await User.findOne({ username: classes[i]['studentIds'][j] });
                if (foundStudent) {
                    const student = {
                        username: foundStudent['username'],
                        name: foundStudent['name'],
                        level: foundStudent['level'],
                        dateOfBirth: foundStudent['dateOfBirth'],
                        gender: foundStudent['gender'],
                        homewtown: foundStudent['hometown'],
                        gpa: foundStudent['gpa']
                    }
                    result.studentIds.push(student);
                } else {
                    console.log("hmmm")
                }
            }
            results.push(result);
        }
        res.send(results);
    } else {
        res.json({
            status: 'Empty'
        });
    }
};
