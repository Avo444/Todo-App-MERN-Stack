import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";

import styles from "./index.module.scss";
const Logo = () => {
    return (
        <Link href="/" className={styles.logo}>
            <img src={logo} alt="Logo" />
            Todo
        </Link>
    );
};
export default Logo;
