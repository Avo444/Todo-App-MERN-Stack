const sendResponse = (res, data, statusCode = 200) => {
    res.set({
        "Content-Type": "application/json",
    })
        .status(statusCode)
        .json(data);
};
module.exports = sendResponse;
