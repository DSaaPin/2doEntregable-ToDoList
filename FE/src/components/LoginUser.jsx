import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../context/UserContext";

const LoginUser = () => {

    const [formData, setFormData] = useState({ email: "", password: "" });

    const { loginUser } = useUsers();
    const navigate = useNavigate();


    const [error, setError] = useState("");


    const handleNavRegister = () => {
        navigate("/register");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const result = await loginUser(formData);

            if (result?.token) {
                localStorage.setItem('token', result.token);
                
                    navigate("/home");
            } else {
                setError("No se recibió token");
            }

        } catch (error) {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div >
            <h2>Inicia sesión:</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
                <button type="submit">Ingresar</button>
                <button type="button" onClick={handleNavRegister}>Registrarse</button>
            </form>
        </div>
    );
};

export default LoginUser;