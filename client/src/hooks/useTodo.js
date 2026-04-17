import { useDispatch, useSelector } from "react-redux";
import { addTodoData } from "../store/slices/todoSlice/api";
import { getTodoError } from "../store/slices/todoSlice/todoSlice";
import useNotification from "./useNotification";

const useTodo = () => {
    const notification = useNotification();
    const todoError = useSelector(getTodoError);
    const dispatch = useDispatch()
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
    return { addTodoHandle };
};

export default useTodo;
