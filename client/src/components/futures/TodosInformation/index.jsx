import { useSelector } from "react-redux";
import { TodosInformationCard } from "../../shared";
import {
    getTodosDone,
    getTodosEdited,
    getTodosInProcess,
} from "../../../store/slices/todoSlice/todoSlice";

import styles from "./index.module.scss";

const TodosInformation = () => {
    const todosDone = useSelector(getTodosDone);
    const todosInProcess = useSelector(getTodosInProcess);
    const todosEdited = useSelector(getTodosEdited);

    return (
        <div className={styles.information}>
            <h3 className={styles.title}>Todos Information</h3>
            <div className={styles.content}>
                <TodosInformationCard
                    title={"Done"}
                    status={"success"}
                    count={(todosDone && todosDone.length) || 0}
                />
                <TodosInformationCard
                    title={"In Process"}
                    status={"warning"}
                    count={(todosInProcess && todosInProcess.length) || 0}
                />
                <TodosInformationCard
                    title={"Edited"}
                    status={"info"}
                    count={(todosEdited && todosEdited.length) || 0}
                />
            </div>
        </div>
    );
};
export default TodosInformation;
