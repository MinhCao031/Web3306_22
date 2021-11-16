const User = require('../models/User');
const Class = require('../models/Class');

module.exports.getClasses = async function(req, res) {
    const { user_id } = req.params;
    const foundClasses = await Class.find({ teacherId: user_id });

    if (foundClasses) {
        const result = [];

        for (let i = 0; i < foundClasses.length; ++i) {
            const foundUser = await User.findOne({ username: foundClasses[i]['leaderId'] });

            const foundClass = {
                classId: foundClasses[i]['classId'],
                className: foundClasses[i]['className'],
                classType: foundClasses[i]['classType'],
                leader: foundUser.name
            };
            result.push(foundClass);
        }
        if (result.length > 0) {
            return res.json(result);
        }
    }
    return res.json({ message: 'No classes found' });
};

module.exports.getClassStudents = async function(req, res) {
    const { class_id } = req.params;
    const foundClass = await Class.findOne({ classId: class_id });

    if (foundClass) {
        const result = [];

        for (let i = 0; i < foundClass['studentIds'].length; ++i) {
            const foundStudent = await User.findOne({ username: foundClass['studentIds'][i] });
            const { name, username, level, dateOfBirth, gender, hometown, gpa, drl } = foundStudent;
            const student = {
                name,
                username,
                level,
                dateOfBirth,
                gender,
                hometown,
                gpa,
                drl
            };
            result.push(student);
        }

        if (result.length > 0) {
            return res.json(result);
        }
    }
    return res.json({ message: 'No students found' });
};
