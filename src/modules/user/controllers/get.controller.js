import Controller from "../../../foundation/controller.js";
import User from "../models/User.js";

export default class GetUserController extends Controller
{
    async handle(request, response) {
        const users = await User.find({});
        response.json(users);
    }
}