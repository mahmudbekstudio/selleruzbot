import Controller from "../../../foundation/controller.js";

export default class CreateUserController extends Controller
{
    handle(request, response) {
        response.send('Create user API.');
    }
}