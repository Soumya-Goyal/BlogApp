"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = require("../controller/postController");
exports.postRoutes = express_1.Router();
let postControllerObj = new postController_1.PostController();
exports.postRoutes.post('/create', postControllerObj.createPost);
exports.postRoutes.get('/', postControllerObj.getAllPosts);
exports.postRoutes.put('/update/:Id', postControllerObj.updatePost);
exports.postRoutes.get('/search', postControllerObj.getPostByTagOrAuthor);
