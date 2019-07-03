"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.userSchema = new mongoose_1.default.Schema({
    "name": { type: String, required: true },
    "role": { type: String, enum: ['Admin', 'Author'], default: 'Author' },
    "about": String,
    "email": { type: String, required: true, unique: true },
    "password": { type: String, required: true }
});
exports.userModel = mongoose_1.default.model("userDetails", exports.userSchema);
