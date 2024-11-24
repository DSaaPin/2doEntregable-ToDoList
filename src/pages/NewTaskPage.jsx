import { useParams, useNavigate } from "react-router-dom";
import AddToDoForm from "../components/AddToDoForm";

const NewTaskPage = () => {

    return (
        <div>
            <h2>Nueva tarea</h2>
            <AddToDoForm />
        </div>
    )

}

export default NewTaskPage;