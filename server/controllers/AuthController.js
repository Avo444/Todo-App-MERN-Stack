const { sendResponse } = require("../helper");

class AuthController {
    async register(req, res) {
        try {
            const { body } = res.locals;
            const register = await req.app.locals.services.users.register(body);
            sendResponse(res, register);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
    async login(req, res) {
        try {
            const { body } = res.locals;
            const login = await req.app.locals.services.users.login(body);
            sendResponse(res, login);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}

module.exports = AuthController;
