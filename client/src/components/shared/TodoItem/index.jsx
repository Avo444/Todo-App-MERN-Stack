import { Link } from "react-router-dom";
import ROUTES from "../../../ROUTES";
import styles from "./index.module.scss";
import { useState } from "react";
import useTodo from "../../../hooks/useTodo";

const TodoItem = ({ todo }) => {
    const [checked, setChecked] = useState(todo.isDone);
    const { changeDone } = useTodo();
    return (
        <div className={styles.item}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => changeDone(e, todo._id, setChecked)}
            />
            <Link
                className={`${styles.title} ${checked && styles.active}`}
                to={`${ROUTES.TODOS}/${todo._id}`}
            >
                {todo.title}
            </Link>

            <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`}>
                    Delete
                </button>
            </div>
        </div>
    );
};
export default TodoItem;
