import { useNavigate } from 'react-router-dom';

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
            <h1>To do List</h1>
            <button onClick={handleOnClickNew}>Nueva Tarea</button>
            <button onClick={handleOnClickList}>Lista de tareas</button>

        </section>
    );
};

export default HomePage;