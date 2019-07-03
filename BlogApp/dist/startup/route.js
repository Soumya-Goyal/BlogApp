"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes_1 = require("../routes/userRoutes");
const postroutes_1 = require("../routes/postroutes");
const authentication_1 = require("../middleware/authentication");
class Routes {
    constructor() {
    }
    static configRoutes(app) {
        app.get('/', (req, res) => {
            res.send("server running");
        });
        app.use('/api/user', userRoutes_1.userRoutes);
        app.use('/api/post', authentication_1.Authenticate.authenticate, postroutes_1.postRoutes);
    }
}
exports.Routes = Routes;
