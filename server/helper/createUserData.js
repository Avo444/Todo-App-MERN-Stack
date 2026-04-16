const bcrypt = require("bcryptjs");

const createUserData = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    delete data.confirmPassword;
    return {
        ...data,
        password: hashedPassword,
        todos: [],
    };
};
module.exports = createUserData;
