const User = require('../models/User');
const Class = require('../models/Class');

module.exports.getClasses = async function(req, res) {
    const { user_id } = req.params;
    const foundClass = await Class.findOne({ teacherId: user_id });

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
                    hometown: foundStudent['hometown'],
                    gpa: foundStudent['gpa'],
                    drl: foundStudent['drl']
                };
                result.studentIds.push(student);
            } else {
                return res.json({ message: 'No students found' });
            }
        }

        return res.json(result);
    } else {
        return res.json({ message: 'No classes found' });
    }
};
