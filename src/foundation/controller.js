export default class Controller
{
    handle (request, response) {
        throw new Error('You must implement the execute() method in your subclass');
    }
}