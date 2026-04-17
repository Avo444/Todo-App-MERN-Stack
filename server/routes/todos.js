const { TodosController } = require("../controllers");
const express = require("express");
const router = express.Router();

const todosController = new TodosController();

router.get("/", todosController.getAllTodos);
router.post("/", todosController.addTodo);
router.patch("/:id", todosController.patchTodo);

module.exports = router;