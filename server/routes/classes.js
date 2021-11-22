const express = require('express');
const ClassController = require('../controllers/ClassController');

const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.get('/:user_id', ClassController.getClasses); // Login required

router.get('/:class_id/students', ClassController.getClassStudents); // Login required

router.get('/:class_id/grades', ClassController.getClassGradeStatistic); // Login required

router.post('/:class_id/import', ClassController.importStudents); // Login required and be teacherId

module.exports = router;
