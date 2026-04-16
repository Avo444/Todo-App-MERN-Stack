const { sendResponse } = require("../helper");

class UsersController {
    async getUserData(req, res) {
        try {
            const { id } = req.params;
            const userData =
                await req.app.locals.services.users.getUserData(id);
            sendResponse(res, userData);
        } catch (err) {
            const error = { error: err.message };
            sendResponse(res, error, 500);
        }
    }
}
module.exports = UsersController;
