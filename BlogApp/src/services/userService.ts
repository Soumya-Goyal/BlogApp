import { userModel } from "../models/user";
import {Request, Response, response} from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export class UserService{

    public static async createUser(req: Request){
        try{
            let hashPassword= await bcrypt.hash(req.body.password,12)// to convert text format pwd to hash, 12 is the no.of saltorrounds
            req.body.password= hashPassword;

            let newUser= new userModel(req.body)
            await newUser.save();
            return newUser;
         }

         catch(err){
             console.log(err);
         }
    }

    public static async userLogin(req: Request){

        try{
            //check if user exists or not

            let user : any= await userModel.findOne({'email': req.body.email}).exec(); 
            //req.body.abcd--> abcd is the field through postman which corresponds to the 'email' in db
            if(user)
            {
                //check for pwd match
                let IspasswordMatch= await bcrypt.compare(req.body.password, user.password)
                // user.password is the encrypted pwd, req.body.password is the text password in post call
                if(IspasswordMatch)
                {
                    //login success, then generate access token
                    let signingOption: jwt.SignOptions= {expiresIn: "12h"}; //12 hours
                    let secret ="secret";// secret is the key used for encrypting the payload
                    let payload= {'email':user.email, 'name': user.name, 'role': user.role, 'userid':user._id}// user data to be sent in the token
                    let accessToken= await jwt.sign(payload, secret, signingOption);
                    return ({'accessToken': accessToken});
                }
                else{
                    return ("Wrong Password")
                }
            }

            else{
                return ("user does not exist")
            }
        }

        catch(err){
            console.log(err);
        }
    }
}