const { sendResponse } = require("../helper");

class TodosController {
    async getAllTodos(req, res) {
        try {
            const { query } = req;
            const todos =
                await req.app.locals.services.todos.getAllTodos(query);
            sendResponse(res, todos);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 404);
        }
    }

    async addTodo(req, res) {
        try {
            const { body } = req;
            const todo = await req.app.locals.services.todos.addTodo(body);
            sendResponse(res, todo);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}
module.exports = TodosController;
