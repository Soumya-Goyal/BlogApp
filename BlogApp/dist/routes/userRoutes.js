"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
exports.userRoutes = express_1.Router();
let userControllerObj = new userController_1.UserController();
exports.userRoutes.post('/register', userControllerObj.createUser);
exports.userRoutes.post('/login', userControllerObj.userLogin);
