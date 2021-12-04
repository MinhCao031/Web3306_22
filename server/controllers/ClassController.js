const User = require('../models/User');
const Class = require('../models/Class');
const Conversation = require('../models/Conversation');

module.exports.getClasses = async function(req, res) {
    try {
        const foundClasses = await Class.find({ teacherId: req.params.user_id });

        if (foundClasses) {
            const result = [];
            try {
                for (let i = 0; i < foundClasses.length; ++i) {
                    const foundUser = await User.findOne({
                        username: foundClasses[i]['leaderId']
                    });

                    const foundClass = {
                        classId: foundClasses[i]['classId'],
                        className: foundClasses[i]['className'],
                        classType: foundClasses[i]['classType'],
                        quantity: foundClasses[i]['studentIds'].length,
                        leader: foundUser.name
                    };
                    result.push(foundClass);
                }
            } catch (err) {
                return res.status(500).json(err);
            }
            if (result.length > 0) {
                return res.status(200).json(result);
            }
        }
        return res.json({ message: 'No classes found' });
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports.getClassStudents = async function(req, res) {
    var foundClass;
    if (req.query.role == 'Teacher') {
        foundClass = await Class.findOne({
            classId: req.query.class_id,
            teacherId: req.query.user_id
        }).catch((err) => {
            return res.status(500).json(err);
        });
    } else {
        foundClass = await Class.findOne({ studentIds: req.query.user_id }).catch((err) => {
            return res.status(500).json(err);
        });
    }

    if (foundClass) {
        const result = [];

        try {
            for (let i = 0; i < foundClass['studentIds'].length; ++i) {
                const foundStudent = await User.findOne({
                    username: foundClass['studentIds'][i]
                });
                result.push(foundStudent);
            }
        } catch (err) {
            return res.status(500).json(err);
        }

        if (result.length > 0) {
            if (req.query.role != 'Teacher') {
                result.push({ className: foundClass.className });
            }
            return res.status(200).json(result);
        }
    }
    return res.status(200).json({ message: 'No students found' });
};

module.exports.getClassGradeStatistic = async function(req, res) {
    const foundClass = await Class.findOne({
        classId: req.params.class_id
    }).catch((err) => {
        res.status(500).json(err);
    });

    if (foundClass) {
        const gpas = [];
        const drls = [];
        const gpaRanges = [
            2.0,
            2.1,
            2.2,
            2.3,
            2.4,
            2.5,
            2.6,
            2.7,
            2.8,
            2.9,
            3.0,
            3.1,
            3.2,
            3.3,
            3.4,
            3.5,
            3.6,
            3.7,
            3.8,
            3.9,
            4.0
        ];
        const drlRanges = [ 35, 50, 65, 80, 90, 100 ];
        try {
            for (let i = 0; i < foundClass['studentIds'].length; ++i) {
                const foundStudent = await User.findOne({
                    username: foundClass['studentIds'][i]
                });
                gpas.push(foundStudent.gpa);
                drls.push(foundStudent.drl);
            }
            const data = {
                gpa: statisticizeGrades(gpas, gpaRanges),
                drl: statisticizeGrades(drls, drlRanges)
            };
            return res.status(200).json(data);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
};

module.exports.importStudents = async function(req, res) {
    var users = req.body.inpjson;

    const foundClass = await Class.findOneAndUpdate(
        { classId: req.params.class_id },
        {
            studentIds: []
        }
    ).catch((err) => {
        return res.status(500).json(err);
    });

    await foundClass.save().catch((err) => {
        return res.status(500).json({ success: false });
    });

    try {
        for (var i = 0; i < users.length; i++) {
            const user = users[i];
            const foundUser = await User.findOne({ username: user.username });

            if (foundUser) {
                const update = {
                    level: user.level,
                    name: user.name,
                    dateOfBirth: user.dateOfBirth,
                    gender: user.gender,
                    hometown: user.hometown,
                    gpa: user.gpa,
                    drl: user.drl
                };

                const updatedUser = await User.findOneAndUpdate({ username: user.username }, update);
                await updatedUser.save().catch((err) => {
                    return res.status(500).json({ success: false });
                });

                foundClass['studentIds'].push(foundUser.username);
                await foundClass.save().catch((err) => {
                    return res.status(500).json({ success: false });
                });
            } else {
                const newUser = new User({
                    username: user.username,
                    password: user.username,
                    level: user.level,
                    name: user.name,
                    dateOfBirth: user.dateOfBirth,
                    gender: user.gender,
                    hometown: user.hometown,
                    gpa: user.gpa,
                    drl: user.drl
                });
                await newUser.save().catch((err) => {
                    return res.status(500).json({ success: false });
                });

                const newConversation = new Conversation({
                    members: [ foundClass.teacherId, newUser.username ]
                });

                await newConversation.save().catch((err) => {
                    return res.json({ success: false });
                });

                foundClass['studentIds'].push(newUser.username);
                await foundClass.save().catch((err) => {
                    return res.status(500).json({ success: false });
                });
            }
        }
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

module.exports.addStudent = async function(req, res) {
    const foundClass = await Class.findOne({
        classId: req.params.class_id
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ success: false });
    });

    if (foundClass && !foundClass['studentIds'].includes(req.body.username)) {
        const newUser = new User({
            username: req.body.username,
            password: req.body.username,
            level: req.body.level,
            name: req.body.name,
            dateOfBirth: req.body.dateOfBirth,
            gender: req.body.gender,
            hometown: req.body.hometown,
            gpa: req.body.gpa,
            drl: req.body.drl
        });
        await newUser.save().catch((err) => {
            return res.json({ success: false });
        });

        const newConversation = new Conversation({
            members: [ foundClass.teacherId, newUser.username ]
        });

        await newConversation.save().catch((err) => {
            return res.json({ success: false });
        });

        foundClass['studentIds'].push(newUser.username);
        await foundClass.save().catch((err) => {
            return res.json({ success: false });
        });

        return res.json({ success: true });
    } else {
        return res.status(200).json({ success: false });
    }
};

module.exports.updateClassStudents = async function(req, res) {
    const foundClass = await Class.findOne({
        classId: req.params.class_id
    }).catch((err) => {
        console.log(err);
        return res.status(500).json({ success: false });
    });

    if (foundClass) {
        const removedStudents = req.body.removed;
        const editedStudents = req.body.edited;

        console.log(foundClass.studentIds);
        for (let i = 0; i < removedStudents.length; ++i) {
            foundClass.studentIds = foundClass.studentIds.filter((item) => item != removedStudents[i]);
        }
        console.log(foundClass.studentIds);

        await foundClass.save().catch((err) => {
            console.log(err);
            return res.status(500).json({ success: false });
        });

        for (let i = 0; i < editedStudents.length; ++i) {
            const foundStudent = await User.findOne({
                username: editedStudents[i].username
            });
            if (foundStudent) {
                foundStudent.level = editedStudents[i].level;
                foundStudent.gpa = editedStudents[i].gpa;
                foundStudent.drl = editedStudents[i].drl;
                foundStudent.dateOfBirth = editedStudents[i].dateOfBirth;
                foundStudent.gender = editedStudents[i].gender;
                foundStudent.hometown = editedStudents[i].hometown;

                await foundStudent.save().catch((err) => {
                    console.log(err);
                    return res.status(500).json({ success: false });
                });
            } else {
                return res.status(400).json({ message: 'Editted student not found' });
            }
        }

        await foundClass.save().catch((err) => {
            console.log(err);
            return res.status(500).json({ success: false });
        });
        return res.json({ success: true });
    } else {
        return res.status(200).json({ message: 'No class found.' });
    }
};

function statisticizeGrades(grades, gradeRanges) {
    gradeGroups = new Array(gradeRanges.length).fill(0);

    for (let i = 0; i < grades.length; ++i) {
        for (let j = 0; j < gradeRanges.length; ++j) {
            let condition;
            if (j == 0) {
                condition = 0 <= grades[i] && grades[i] < gradeRanges[0];
            } else if (j == gradeRanges.length - 1) {
                condition = gradeRanges[j - 1] <= grades[i] && grades[i] <= gradeRanges[j];
            } else {
                condition = gradeRanges[j - 1] <= grades[i] && grades[i] < gradeRanges[j];
            }
            if (condition) {
                gradeGroups[j] += 1;
                break;
            }
        }
    }
    return gradeGroups;
}
