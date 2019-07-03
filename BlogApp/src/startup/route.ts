import express from "express";
import {userRoutes} from "../routes/userRoutes";
import {postRoutes} from "../routes/postroutes";
import { Authenticate } from "../middleware/authentication";

export class Routes{

    constructor(){

    }

    public static configRoutes(app: express.Application){

        app.get('/',(req, res)=>{

            res.send("server running")
        })

        app.use('/api/user', userRoutes);

        app.use('/api/post', Authenticate.authenticate, postRoutes);


    }
}