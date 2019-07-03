import { UserService } from "../services/userService";
import{Request, Response} from "express";


export class UserController{

    public async createUser(req: Request, res: Response){

       let result= await UserService.createUser(req); 
         res.send(result);
     }

     public async userLogin(req:Request, res:Response){
        let result= await UserService.userLogin(req);
         res.send(result)
     }
}