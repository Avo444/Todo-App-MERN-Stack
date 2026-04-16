const { ObjectId } = require("mongodb");
const { createUserData } = require("../helper");

const DatabaseService = require("./DatabaseService");
const bcrypt = require("bcryptjs");

class UsersService extends DatabaseService {
    async register(body) {
        const db = await this.connect("users");
        const isExist = await db.findOne({ email: body.email });
        if (isExist) {
            throw new Error("This email is already used");
        }
        const userData = await createUserData(body);
        const createUser = await db.insertOne(userData);
        const user = await db.findOne({
            _id: new ObjectId(createUser.insertedId),
        });
        return user;
    }

    async login(body) {
        const db = await this.connect("users");
        const user = await db.findOne({ email: body.email });
        if (!user) {
            throw new Error("Invalid email or password");
        }

        const confirmPassword = await bcrypt.compare(
            body.password,
            user.password,
        );

        if (!confirmPassword) {
            throw new Error("Invalid email or password");
        }

        return user;
    }

    async getUserData(id) {
        const db = await this.connect("users");
        const user = await db.findOne({ _id: new ObjectId(id) });
        return user;
    }
}

module.exports = UsersService;
