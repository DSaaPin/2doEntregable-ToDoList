import { useNavigate } from 'react-router-dom';
import styles from './HomePage.styles.module.css'

const HomePage = () => {

    const navigate = useNavigate();

    const handleOnClickNew = () => {
        navigate("/newtask");

    };

    const handleOnClickList = () => {
        navigate("/todolist");
    }

    return (
        <section id="section-homepage">
            <div className={`${styles.homepage}`}>
            <h1>¡Bienvenido a tu lista de tareas!</h1>
            </div>
            <div className={`${styles.buttonsContainer}`}>
            <button className={`${styles.buttonsHome}`} onClick={handleOnClickNew}>Nueva Tarea</button>
            <button className={`${styles.buttonsHome}`} onClick={handleOnClickList}>Lista de tareas</button>
            </div>

        </section>
    );
};

export default HomePage;