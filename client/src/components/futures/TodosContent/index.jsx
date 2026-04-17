import TodoForm from "../TodoForm";
import TodosList from "../TodosList";
import styles from "./index.module.scss";

const TodosContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.todos}>
                <TodoForm />
                <TodosList />
            </div>
        </div>
    )
};
export default TodosContent;
