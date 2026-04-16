import styles from "./index.module.scss";
const TodosInformationCard = ({ title, status, count }) => {
    return (
        <div className={`${styles.item} ${styles[status]}`}>
            <p className={styles.title}>{title}</p>
            <p className={styles.count}>Count: {count}</p>
        </div>
    );
};
export default TodosInformationCard;
