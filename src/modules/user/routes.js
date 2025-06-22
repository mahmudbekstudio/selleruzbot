import CreateUserController from "./controllers/create.controller.js";
import config from "../../config/index.js";
import GetUserController from "./controllers/get.controller.js";

export default {
    create: {
        controller: new CreateUserController(),
        method: config.routeMethods.post,
    },
    get: {
        controller: new GetUserController(),
        method: config.routeMethods.get,
    }
}