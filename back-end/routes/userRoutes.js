const express = require('express');
const userController = require('../controller/userController');




const route = express.Router();

route.post("/user",userController.createUser);
route.get("/mail",userController.checkMail);
route.post("/login",userController.login);
route.post("/reset",userController.reset);
route.patch("/updatePass",userController.updatePassword);
module.exports = route;