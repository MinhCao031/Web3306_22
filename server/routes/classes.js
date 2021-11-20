const express = require('express');
const ClassController = require('../controllers/ClassController');

const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.get('/:user_id/show', ClassController.getClasses); // Login required

router.get('/:class_id/students', ClassController.getClassStudents); // Login required

router.post('/:class_id/grades', ClassController.getClassGradeStatistic); // Login required

module.exports = router;
