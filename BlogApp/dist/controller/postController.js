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
const postService_1 = require("../services/postService");
const authentication_1 = require("../middleware/authentication");
const actionType_1 = require("../datamodel/actionType");
class PostController {
    createPost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            authentication_1.Authenticate.authorize(req, res, next, actionType_1.Actiontype.createPost);
            yield postService_1.PostService.createPost(req);
            res.send("Post created");
        });
    }
    getAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield postService_1.PostService.getAllPosts();
            res.send(result);
        });
    }
    updatePost(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            authentication_1.Authenticate.authorize(req, res, next, actionType_1.Actiontype.updatePost);
            let result = yield postService_1.PostService.updatePost(req);
            res.send(result);
        });
    }
    getPostByTagOrAuthor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield postService_1.PostService.getPostByTagOrAuthor(req);
            res.send(result);
        });
    }
}
exports.PostController = PostController;
