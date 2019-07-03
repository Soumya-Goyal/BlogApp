import { constants } from "http2";
import { Actiontype } from "./actionType";

export const rolePermissions = {
    "Admin":{
             "Permissions":[
                 Actiontype.createPost,
                 Actiontype.updatePost,
                 Actiontype.deletePost
             ] 
            },
     "Author":{
               "Permissions":[
                  Actiontype.getPost
               ]
            }
     }       
