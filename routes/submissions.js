const express = require('express');
const router = express.Router();
const assignments = require('../controllers/assignments');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateClassroom, validateAssignment } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/:id/copyleaks/completed')
    .get(catchAsync(assignments.checkPlagiarism))      

module.exports = router;    