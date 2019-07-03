import { postModel } from "../models/post";
import {Request, Response} from "express";
import { ResponseModel } from "../helper/responseModel";

export class PostService{

    public static async createPost(req: any){
        try{
            req.body.CreatedBy= req.user.userid;
            let newPost= new postModel(req.body)
             await newPost.save();
         }

         catch(err){
             console.log(err);
         }
    }

    public static async getAllPosts(){ 
        try{
           let allPosts= await postModel.find().populate('CreatedBy').exec();// populate will get the details of the user using that objectId who created the post
           return ResponseModel.getValidResponse(allPosts);
         }

         catch(err){
             console.log(err);
             ResponseModel.getInvalidResponse(err);
         }
    }

    public static async updatePost(req:Request){ 
        try{
            let a = await postModel.findByIdAndUpdate(req.params.Id, req.body).exec();
            return a;
        }

        catch(err){
            console.log(err);
        }
    }

    public static async getPostByTagOrAuthor(req:Request){ 
        try{
            let a = await postModel.find({'author': req.query.author}).exec();
            console.log(a);
            return a;
        }

        catch(err){
            console.log(err);
        }
    }
}