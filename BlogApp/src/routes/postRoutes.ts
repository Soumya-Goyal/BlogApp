import { Router } from "express";
import { PostController } from "../controller/postController";

export const postRoutes: Router = Router();

let postControllerObj = new PostController();


postRoutes.post('/create', postControllerObj.createPost)
postRoutes.get('/', postControllerObj.getAllPosts)
postRoutes.put('/update/:Id', postControllerObj.updatePost)
postRoutes.get('/search', postControllerObj.getPostByTagOrAuthor)