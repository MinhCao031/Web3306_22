const express = require('express');
const classes = require('../controllers/classController');

const { isLoggedIn } = require('../middleware');

const router = express.Router();

// These two functions below need to be logged in first.
router.route('/show').get(classes.getClasses);

router.route('/show/:id').get(classes.getClassStudents);

module.exports = router;
