import styles from "./index.module.scss";
const HelpCenter = () => {
    return (
        <div className={styles.help__center}>
            <span className={styles["help__center--nullish"]}>?</span>
            <div className={styles["help__center--content"]}>
                <div className={styles["help__center--content__title"]}>
                    Help Center
                </div>
                <p className={styles["help__center--content__desc"]}>
                    Having Trouble in Learning. Please contact us for more
                    questions.
                </p>
                <a
                    href="/help"
                    className={styles["help__center--content__btn"]}
                >
                    Go To Help Center
                </a>
            </div>
        </div>
    );
};

export default HelpCenter;
