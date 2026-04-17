import { useState } from "react";
import { useTodo } from "../../../hooks";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

const TodoForm = () => {
    const { addTodoHandle } = useTodo();
    const dispatch = useDispatch();

    return (
        <form className={styles.form} onSubmit={addTodoHandle}>
            <label>
                Write Todo
                <input
                    type="text"
                    name="todo"
                    required
                />
            </label>
            <button className={styles.btn}>Add</button>
        </form>
    );
};
export default TodoForm;
