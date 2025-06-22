import CreateUserController from "./controllers/create.controller.js";
import config from "../../config/index.js";

export default {
    create: {
        controller: new CreateUserController(),
        method: config.routeMethods.get,
    },
}