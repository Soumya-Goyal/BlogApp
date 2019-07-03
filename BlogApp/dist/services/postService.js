"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../models/post");
const responseModel_1 = require("../helper/responseModel");
class PostService {
    static createPost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.CreatedBy = req.user.userid;
                let newPost = new post_1.postModel(req.body);
                yield newPost.save();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let allPosts = yield post_1.postModel.find().populate('CreatedBy').exec();
                return responseModel_1.ResponseModel.getValidResponse(allPosts);
            }
            catch (err) {
                console.log(err);
                responseModel_1.ResponseModel.getInvalidResponse(err);
            }
        });
    }
    static updatePost(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let a = yield post_1.postModel.findByIdAndUpdate(req.params.Id, req.body).exec();
                return a;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getPostByTagOrAuthor(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let a = yield post_1.postModel.find({ 'author': req.query.author }).exec();
                console.log(a);
                return a;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.PostService = PostService;
