import { useSelector } from "react-redux";
import { getAuthData } from "../../../store/slices/authSlice/authSlice";

import styles from "./index.module.scss";
const AccountHeading = () => {
    const auth = useSelector(getAuthData);
    return (
        <div className={styles.heading}>
            <h2 className={styles.title}>Hi, {auth && auth.firstName}</h2>
            <h3 className={styles.desc}>Let's finish your task today!</h3>
        </div>
    );
};
export default AccountHeading;
