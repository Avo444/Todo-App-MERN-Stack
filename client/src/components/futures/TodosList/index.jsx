import { useSelector } from "react-redux";
import { getTodoData } from "../../../store/slices/todoSlice/todoSlice";
import styles from "./index.module.scss";
import { TodoItem } from "../../shared";

const TodosList = () => {
    const todos = useSelector(getTodoData);
    return (
        <div className={styles.todos}>
            {todos.length ? (
                todos.map((todo, index) => (
                    <TodoItem key={todo._id} todo={todo} />
                ))
            ) : (
                <p>Empty</p>
            )}
        </div>
    );
};
export default TodosList;
