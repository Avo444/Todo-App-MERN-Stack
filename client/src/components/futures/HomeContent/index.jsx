import AccountHeading from "../AccountHeading";
import TodosInformation from "../TodosInformation";
import styles from "./index.module.scss";
const HomeContent = () => {
    return (
        <div className={styles.content}>
            <AccountHeading />
            <TodosInformation />
        </div>
    )
};
export default HomeContent;
