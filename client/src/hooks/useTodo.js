import { useDispatch, useSelector } from "react-redux";
import {
    addTodoData,
    changeTodoData,
    deleteTodoData,
} from "../store/slices/todoSlice/api";
import { getTodoError } from "../store/slices/todoSlice/todoSlice";
import useNotification from "./useNotification";

const useTodo = () => {
    const notification = useNotification();
    const todoError = useSelector(getTodoError);
    const dispatch = useDispatch();
    const addTodoHandle = (e) => {
        e.preventDefault();
        const title = e.target[0].value;

        if (!title.length || title.length < 3) {
            notification("Todo name must be most 3 characters", "error");
            return;
        }

        dispatch(addTodoData(title));

        if (todoError) {
            notification(todoError, "error");
            return;
        }

        notification("Todo is added successful!");
        e.target.reset();
    };

    const editTodoHandle = (e, id, setEditTodo) => {
        e.preventDefault();
        const title = e.target[0].value;
        if (!title.length || title.length < 3) {
            notification("Todo name must be most 3 characters", "error");
            return;
        }
        dispatch(changeTodoData({ id, title }));
        if (todoError) {
            notification(todoError, "error");
            return;
        }

        notification("Todo is updated successful!");
        setEditTodo(null);
        e.target.reset();
    };

    const changeDone = (e, id, setChecked) => {
        setChecked(e.target.checked);

        dispatch(changeTodoData({ id, isDone: e.target.checked }));

        if (todoError) {
            notification(todoError, "error");
            return;
        }

        notification("Todo is changed successfull!");
    };
    const checkForm = (title, setEditTodo) => {
        if (!title) {
            setEditTodo(null);
        }
    };

    const deleteTodo = (id) => {
        dispatch(deleteTodoData(id));

        if (todoError) {
            notification(todoError, "error");
            return;
        }

        notification("Todo is deleted successfull!");
    };
    return { addTodoHandle, changeDone, editTodoHandle, checkForm, deleteTodo };
};

export default useTodo;
