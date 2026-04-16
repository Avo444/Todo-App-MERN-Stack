import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const NavbarItem = ({ title, link }) => {
    return (
        <li className={styles.item}>
            <NavLink className={styles.nav__item} to={link}>
                {title}
            </NavLink>
        </li>
    );
};

export default NavbarItem;
