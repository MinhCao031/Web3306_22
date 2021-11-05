const User = require('../models/user');
const express = require('express');
const session = require('express-session');
const Class = require('../models/class');

module.exports.getClasses = async function(req, res) {
    // '10022019' is for testing furpose only.
    const foundClass = await Class.findOne({ teacherId: '10012019' });
    console.log(foundClass)
    if (foundClass) {
        const result = {
            className: foundClass['className'],
            studentIds: []
        };

        for (let i = 0; i < foundClass['studentIds'].length; i++) {
            const foundStudent = await User.findOne({ username: foundClass['studentIds'][i] });
            if (foundStudent) {
                const student = {
                    username: foundStudent['username'],
                    name: foundStudent['name'],
                    level: foundStudent['level'],
                    dateOfBirth: foundStudent['dateOfBirth'],
                    gender: foundStudent['gender'],
                    homewtown: foundStudent['hometown'],
                    gpa: foundStudent['gpa']
                };
                result.studentIds.push(student);
            } else {
                res.json({
                    status: 'No students found'
                });
            }
        }

        res.send(result);
    } else {
        res.json({
            status: 'No classes found'
        });
    }
};
