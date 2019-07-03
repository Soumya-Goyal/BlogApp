"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionType_1 = require("./actionType");
exports.rolePermissions = {
    "Admin": {
        "Permissions": [
            actionType_1.Actiontype.createPost,
            actionType_1.Actiontype.updatePost,
            actionType_1.Actiontype.deletePost
        ]
    },
    "Author": {
        "Permissions": [
            actionType_1.Actiontype.getPost
        ]
    }
};
