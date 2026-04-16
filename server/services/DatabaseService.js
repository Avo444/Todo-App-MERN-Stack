const { MongoClient } = require("mongodb");

class DatabaseService {
    async connect(collection) {
        const client = await MongoClient.connect(process.env.DATABASE_URL);
        const db = await client.db();
        const coll = await db.collection(collection);
        return coll;
    }
}
module.exports = DatabaseService;
