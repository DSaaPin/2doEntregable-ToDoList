import { NavLink } from "react-router-dom";
import styles from "./Header.styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                        className={(navData) => (navData.isActive ? styles.active : "")}
                        to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={(navData) => (navData.isActive ? styles.active : "")}
                        to="/newtask">
                            Nueva Tarea
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={(navData) => (navData.isActive ? styles.active : "")}
                        to="/todolist">
                            Lista de Tareas
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header