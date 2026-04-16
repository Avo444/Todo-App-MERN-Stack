import { TodosInformationCard } from "../../shared";
import styles from "./index.module.scss";
const TodosInformation = () => {
    return (
        <div className={styles.information}>
            <h3 className={styles.title}>Todos Information</h3>
            <div className={styles.content}>
                <TodosInformationCard title={"Done"} status={"success"} count={0} />
                <TodosInformationCard title={"In Process"} status={"warning"} count={0} />
                <TodosInformationCard title={"Edited"} status={"info"} count={0} />
            </div>
        </div>
    );
};
export default TodosInformation;
