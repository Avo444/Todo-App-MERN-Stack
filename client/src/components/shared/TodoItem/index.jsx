import { useState } from "react";
import { Link } from "react-router-dom";

import useTodo from "../../../hooks/useTodo";
import ROUTES from "../../../ROUTES";
import styles from "./index.module.scss";

const TodoItem = ({ todo, setEditTodo }) => {
    const { changeDone } = useTodo();
    const [checked, setChecked] = useState(todo.isDone);
    const {deleteTodo} = useTodo();
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
                <button className={`${styles.btn} ${styles.edit}`} onClick={() => setEditTodo({id: todo._id, title: todo.title})}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`} onClick={() => deleteTodo(todo._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};
export default TodoItem;
