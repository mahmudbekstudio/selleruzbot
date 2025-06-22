import app from '../app.js';
import user from "./user/routes.js"
import config from "../config/index.js";

const routes = {
    user
};

class ExecuteRoute
{
    execute(currentRoute, route) {
        if (Object.keys(config.routeMethods).indexOf(route.method) > -1) {
            this[route.method](currentRoute, route);
        }
    }

    post() {
        //
    }

    get(currentRoute, route) {
        app.get(currentRoute, (req, res) => route.controller.handle(req, res))
    }

    put() {
        //
    }

    delete() {
        //
    }
}

export default class Routes
{
    init() {
        const executeRoute = new ExecuteRoute();

        for (const moduleName in routes) {
            for (const moduleSubKey in routes[moduleName]) {
                const currentRoute = ['', moduleName, moduleSubKey].join('/');
                executeRoute.execute(currentRoute, routes[moduleName][moduleSubKey])
            }
        }
    }
}