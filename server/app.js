require("dotenv").config();

const { authRouter, usersRouter, todosRouter } = require("./routes");

const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const UsersService = require("./services/UsersService");
const { TodosService } = require("./services");

const app = express();

app.locals.services = {
    users: new UsersService(),
    todos: new TodosService()
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
    cors({
        origin: "http://localhost:5173",
    }),
);
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/todos", todosRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
