const createTodoData = (userID, title) => {
    return {
        title,
        userID,
        isDone: false,
        createdAt: new Date(),
    };
};
module.exports = createTodoData;
