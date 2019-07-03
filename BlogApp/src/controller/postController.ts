import { PostService } from "../services/postService";
import {Request, Response} from "express";
import { Authenticate } from "../middleware/authentication";
import { Actiontype} from "../datamodel/actionType"

export class PostController{

    public async createPost(req: Request, res: Response, next: any){

        Authenticate.authorize(req, res, next, Actiontype.createPost);
        await PostService.createPost(req); 
         res.send("Post created");
     }

    public async getAllPosts(req: Request, res: Response){
        let result= await PostService.getAllPosts();
         res.send(result);
     }

     public async updatePost(req: Request, res: Response, next:any){

        Authenticate.authorize(req, res, next, Actiontype.updatePost);
        let result= await PostService.updatePost(req);
         res.send(result);
     }

     public async getPostByTagOrAuthor(req: Request, res: Response){
         let result= await PostService.getPostByTagOrAuthor(req);
         res.send(result);
     }
}