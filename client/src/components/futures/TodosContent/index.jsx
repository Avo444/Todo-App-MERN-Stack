import { useState } from "react";
import TodoForm from "../TodoForm";
import TodosList from "../TodosList";
import styles from "./index.module.scss";

const TodosContent = () => {
    const [editTodo, setEditTodo] = useState(null);
    return (
        <div className={styles.content}>
            <div className={styles.todos}>
                <TodoForm setEditTodo={setEditTodo} editTodo={editTodo} />
                <TodosList setEditTodo={setEditTodo} />
            </div>
        </div>
    );
};
export default TodosContent;
