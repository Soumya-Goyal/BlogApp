import mongoose, { Schema } from "mongoose";

enum TypeOfPost{
    Food,
    Technology,
    Fashion
}
export const postSchema= new mongoose.Schema({
        "title": {type: String, required: true},
        "description": {type: String, required: true, unique:true},
        "Type": {type: String},
        "CreatedBy":{type: Schema.Types.ObjectId, ref:'userDetails', required:true},
        "comments":[{
                     "name": String,
                     "Likes" : Number,
                     "Statement": String
                   }],
        "Active": Boolean,
        "dateCreated": {type: Date, default: Date.now},
        "dateUpdated": {type: Date, default: Date.now},
        "Tags": {type: Array}

    })

    export let postModel= mongoose.model("postDetails", postSchema);
