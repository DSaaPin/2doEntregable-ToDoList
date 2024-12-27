import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";

const RegisterUserForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });


    const { registerUser } = useUsers();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCancel = () => {
        navigate("/login");
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const newUser = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
        };

        registerUser(newUser);  
        
        setTimeout(() => {        
            navigate("/login");
        }, 2000);
    };

    return (
        <div>
            <h2>Registrar usuario</h2>

        <form onSubmit={handleRegister}>
                    <label>Nombre usuario:
                        <input type="text" name="name" value={formData.name}
                            onChange={handleChange}
                            placeholder="Usuario" required />
                    </label>
                    <label>Email:
                        <input type="email" name="email" value={formData.email}
                            onChange={handleChange}
                            placeholder="Email" required/>
                    </label>
                    <label>Contraseña:
                        <input type="password" name="password" value={formData.password}
                            onChange={handleChange}
                            placeholder="Contraseña" required/>
                    </label>
                    <div >
                    <button type="submit">Registrarse</button>
                    <button type="button" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
                </div>

    );
};

export default RegisterUserForm;