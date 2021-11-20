const User = require('../models/User');
const Class = require('../models/Class');

module.exports.getClasses = async function (req, res) {
  try {
    const foundClasses = await Class.find({ teacherId: req.params.user_id });

    if (foundClasses) {
      const result = [];
      try {
        for (let i = 0; i < foundClasses.length; ++i) {
          const foundUser = await User.findOne({
            username: foundClasses[i]['leaderId'],
          });

          const foundClass = {
            classId: foundClasses[i]['classId'],
            className: foundClasses[i]['className'],
            classType: foundClasses[i]['classType'],
            leader: foundUser.name,
          };
          result.push(foundClass);
        }
      } catch (err) {
        res.status(500).json(err);
      }

      if (result.length > 0) {
        return res.status(200).json(result);
      }
    }
    return res.json({ message: 'No classes found' });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getClassStudents = async function (req, res) {
  try {
    const foundClass = await Class.findOne({ classId: req.params.class_id });

    if (foundClass) {
      const result = [];

      try {
        for (let i = 0; i < foundClass['studentIds'].length; ++i) {
          const foundStudent = await User.findOne({
            username: foundClass['studentIds'][i],
          });
          const {
            name,
            username,
            level,
            dateOfBirth,
            gender,
            hometown,
            gpa,
            drl,
          } = foundStudent;
          const student = {
            name,
            username,
            level,
            dateOfBirth,
            gender,
            hometown,
            gpa,
            drl,
          };
          result.push(student);
        }
      } catch (err) {
        res.status(500).json(err);
      }

      if (result.length > 0) {
        console.log(result);
        return res.status(200).json(result);
      }
    }
    return res.status(200).json({ message: 'No students found' });
  } catch (err) {
    res.status(500).json(err);
  }
};
