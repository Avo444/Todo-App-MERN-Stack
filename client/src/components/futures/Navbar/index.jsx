import ROUTES from "../../../ROUTES";
import { HelpCenter, Logo } from "../../shared";
import { NavbarItem } from "../../shared/NavbarItem";
import styles from "./index.module.scss";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.nav__content}>
                <Logo />

                <ul className={styles.menu}>
                    <NavbarItem title={"Home"} link={ROUTES.HOME} />
                    <NavbarItem title={"Todos"} link={ROUTES.TODOS} />
                    <NavbarItem title={"Settings"} link={ROUTES.SETTINGS} />
                </ul>
            </div>
            <HelpCenter />
        </nav>
    );
};
export default Navbar;
