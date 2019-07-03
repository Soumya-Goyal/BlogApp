"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
class UserService {
    static createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let hashPassword = yield bcrypt.hash(req.body.password, 12); // to convert text format pwd to hash, 12 is the no.of saltorrounds
                req.body.password = hashPassword;
                let newUser = new user_1.userModel(req.body);
                yield newUser.save();
                return newUser;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static userLogin(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //check if user exists or not
                let user = yield user_1.userModel.findOne({ 'email': req.body.email }).exec();
                //req.body.abcd--> abcd is the field through postman which corresponds to the 'email' in db
                if (user) {
                    //check for pwd match
                    let IspasswordMatch = yield bcrypt.compare(req.body.password, user.password);
                    // user.password is the encrypted pwd, req.body.password is the text password in post call
                    if (IspasswordMatch) {
                        //login success, then generate access token
                        let signingOption = { expiresIn: "12h" }; //12 hours
                        let secret = "secret"; // secret is the key used for encrypting the payload
                        let payload = { 'email': user.email, 'name': user.name, 'role': user.role, 'userid': user._id }; // user data to be sent in the token
                        let accessToken = yield jwt.sign(payload, secret, signingOption);
                        return ({ 'accessToken': accessToken });
                    }
                    else {
                        return ("Wrong Password");
                    }
                }
                else {
                    return ("user does not exist");
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.UserService = UserService;
