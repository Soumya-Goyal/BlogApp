import express from "express"
import {Request, Response} from 'express'
import { Routes } from "./startup/route";
import bodyParser from "body-parser";
import {DB} from './startup/db'
import { Authenticate } from "./middleware/authentication";

class BlogApp{

 app: express.Application;

constructor(){
    this.app= express();
    this.app.listen(3000, 'localhost', function(){
    console.log("server is running");
   })

   this.configBodyParser();
   //this.app.use(Authenticate.authenticate);
   Routes.configRoutes(this.app); 
   DB.connectMongoDB();
}

  private configBodyParser(){
    this.app.use(bodyParser.json()); 
    this.app.use(bodyParser.urlencoded({extended: true}));
  }

}

const blog1= new BlogApp();