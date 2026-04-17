const { ObjectId } = require("mongodb");
const { createTodoData } = require("../helper");
const DatabaseService = require("./DatabaseService");

class TodosService extends DatabaseService {
    async getAllTodos(query) {
        const db = await this.connect("todos");
        const filter = Object.entries(query).reduce((acc, [key, value]) => {
            switch (key) {
                case "userId": {
                    acc.userId = new ObjectId(value);
                    break;
                }
            }
            return acc;
        }, {});
        const todos = await db.find(filter).toArray();

        return todos;
    }

    async addTodo({ userID, title }) {
        const db = await this.connect("todos");
        const createdTodo = await db.insertOne(createTodoData(userID, title));
        const todo = await db.findOne({
            _id: new ObjectId(createdTodo.insertedId),
        });
        const usersDB = await this.connect("users");
        const user = usersDB.updateOne(
            { _id: new ObjectId(userID) },
            { $push: { todos: createdTodo.insertedId } },
        );

        return todo;
    }

    async patchTodo(data) {
        const { id, userID } = data;
        const db = await this.connect("todos");

        const changedTodo = await db.updateOne(
            { _id: new ObjectId(id), userID: userID },
            {
                $set: {
                    ...data,
                    ...(data.title ? { updatedAt: new Date() } : {}),
                },
            },
        );
        const todo = await db.findOne({
            _id: new ObjectId(id),
            userID: userID,
        });

        return todo;
    }

    async deleteTodo(id) {
        const db = await this.connect("todos");
        const deletedTodo = await db.deleteOne({ _id: new ObjectId(id) });
        return { id };
    }
}
module.exports = TodosService;
