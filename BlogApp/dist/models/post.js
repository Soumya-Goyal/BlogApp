"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
var TypeOfPost;
(function (TypeOfPost) {
    TypeOfPost[TypeOfPost["Food"] = 0] = "Food";
    TypeOfPost[TypeOfPost["Technology"] = 1] = "Technology";
    TypeOfPost[TypeOfPost["Fashion"] = 2] = "Fashion";
})(TypeOfPost || (TypeOfPost = {}));
exports.postSchema = new mongoose_1.default.Schema({
    "title": { type: String, required: true },
    "description": { type: String, required: true, unique: true },
    "Type": { type: String },
    "CreatedBy": { type: mongoose_1.Schema.Types.ObjectId, ref: 'userDetails', required: true },
    "comments": [{
            "name": String,
            "Likes": Number,
            "Statement": String
        }],
    "Active": Boolean,
    "dateCreated": { type: Date, default: Date.now },
    "dateUpdated": { type: Date, default: Date.now },
    "Tags": { type: Array }
});
exports.postModel = mongoose_1.default.model("postDetails", exports.postSchema);
