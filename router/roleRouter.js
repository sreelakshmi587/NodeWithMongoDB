const express= require("express");
const roleController = require('../controller/roleController');

const router = express.Router();

router.post('/add-role',roleController.add_role);
router.get('/get-roles',roleController.get_roles);


module.exports = router;