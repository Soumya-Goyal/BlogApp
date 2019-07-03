import * as jwt from 'jsonwebtoken'
import {Request, Response} from "express";
import { rolePermissions } from '../datamodel/permissions';
import { Actiontype } from '../datamodel/actionType';

export class Authenticate{

    public static async authenticate(req:any, res:Response, next:any){
        let token: any= req.header("Authorization")

        if(token==null){
           return res.status(401).send("Access denied");
        }

        try{
            let decodedToken= await jwt.verify(token,"secret"); // verifies if access token is valid
            console.log(decodedToken); //decodedtoken is storing the payload sent during authentication
            req.user= decodedToken; next(); 
        }
        catch(error){
            res.status(401).send("Bad Request, access denied");
        }
    }

    public static authorize(req:any , res:Response, next: any, action: Actiontype){

        switch(req.user.role){
            case "Admin":
                let result= rolePermissions.Admin.Permissions.indexOf(action)
                if(result>=0){
                    return true;
                
                }
                else{
                  return res.status(401).send("You don't have permissions to perform this action")
                }
            
            case "Author":
                    let result2= rolePermissions.Author.Permissions.indexOf(action)
                    if(result2>=0){
                        return true;
                    
                    }
                    else{
                      return res.status(401).send("You don't have permissions to perform this action")
                    }    
            default:
                return res.status(401).send("You don't have permissions to perform this action")
        }

    }
}