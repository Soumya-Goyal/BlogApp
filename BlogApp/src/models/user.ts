import Mongoose from "mongoose";


 export const userSchema= new Mongoose.Schema({

    "name": {type: String, required: true},
    "role": {type: String, enum:['Admin', 'Author'], default:'Author'},
    "about": String,
    "email": {type: String, required: true, unique:true},
    "password": {type: String, required: true}
 })

 export let userModel= Mongoose.model("userDetails", userSchema);

 