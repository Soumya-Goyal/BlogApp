import { Router } from "express";
import { UserController } from "../controller/userController";

export const userRoutes: Router = Router();

let userControllerObj = new UserController();

userRoutes.post('/register', userControllerObj.createUser)
userRoutes.post('/login', userControllerObj.userLogin)