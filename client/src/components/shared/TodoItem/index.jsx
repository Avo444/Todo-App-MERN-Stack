import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import ROUTES from "../../../ROUTES";

const TodoItem = ({ todo }) => {
    return (
        <div className={styles.item}>
            <input type="checkbox" checked={todo.isDone} />
            <Link className={styles.title} to={`${ROUTES.TODOS}/${todo._id}`}>
                {todo.title}
            </Link>

            <div className={styles.buttons}>
                <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                <button className={`${styles.btn} ${styles.delete}`}>Delete</button>
            </div>
        </div>
    );
};
export default TodoItem;
