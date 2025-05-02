const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createMember, getMembers, getMemberById } = require('../controllers/memberController');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save files to the uploads/ directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    // Save the file with a unique name
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
router.post('/', upload.single('image'), createMember);
router.get('/', getMembers);
router.get('/:id', getMemberById);

module.exports = router;
