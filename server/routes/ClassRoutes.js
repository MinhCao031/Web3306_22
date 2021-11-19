const express = require('express');
const ClassController = require('../controllers/ClassController');

const { isLoggedIn } = require('../middleware');

const router = express.Router();

router.route('/:user_id/show').get(ClassController.getClasses); // Login required

router.route('/:class_id/show/students').get(ClassController.getClassStudents); // Login required

module.exports = router;
