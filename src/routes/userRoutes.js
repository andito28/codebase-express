const express = require('express');
const router = express.Router();
const userController = require('@controllers/userController');
const { createUserSchema } = require('@validations/userValidation');
const validate = require('@middlewares/validate');
const upload = require('@middlewares/upload');

router.get('/', userController.index);
router.post('/', validate(createUserSchema), userController.create);
router.post('/avatar', upload.single('avatar'), userController.upload);

module.exports = router;