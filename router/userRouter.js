const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.get("/get-users", userController.get_users);

router.post("/create", userController.create_user);

router.post("/create-users", userController.create_users);

router.get("/get-user/:name", userController.get_user_by_name);

router.get("/get-userbyId/:id", userController.get_user_by_id);

router.get("/get-user-roles",userController.get_user_with_roles);

router.delete("/userById/:id", userController.delete_user_by_id);

router.delete("/users/:age", userController.delete_users_by_age);

router.put('/update-user/:id',userController.update_user_details);

module.exports = router;
