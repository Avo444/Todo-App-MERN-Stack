import { useEffect, useState } from "react";
import { useTodo } from "../../../hooks";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";

const TodoForm = ({ setEditTodo, editTodo }) => {
    const { addTodoHandle, editTodoHandle, checkForm } = useTodo();
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        setInput(editTodo?.title || "");
    }, [editTodo]);

    return (
        <form
            className={styles.form}
            onSubmit={(e) =>
                editTodo ? editTodoHandle(e, editTodo.id, setEditTodo) : addTodoHandle(e)
            }
            onBlur={() => checkForm(input, setEditTodo)}
        >
            <label>
                Write Todo
                <input
                    type="text"
                    name="todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                />
            </label>
            <button className={styles.btn}>{editTodo ? "Save" : "Add"}</button>
        </form>
    );
};
export default TodoForm;
