import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const UsersContext = createContext();

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
};

const userReducer = (state, action) => {
    switch (action.type) {
        case "REGISTER_USER":
            return { ...state, user: action.payload };
        case "LOGIN_USER":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};


export const UsersProvider = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, { user: null });

    const authURL = "http://localhost:3000/api/auth";

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        }
    }, []);

    const registerUser = async (user) => {
        try {
            const response = await axios.post(`${authURL}/register`, user)

            dispatch({ type: "REGISTER_USER", payload: response.data });
        }
        catch (error) {
            console.error("Error al registrar usuario: ", error)
        };
    };

    const loginUser = async (user) => {
        try {
            const response = await axios.post(`${authURL}/login`, user);

            const { token, user: userData } = response.data;

            localStorage.setItem("token", token);
            axios.defaults.headers['Authorization'] = `Bearer ${token}`;

            dispatch({ type: "LOGIN_USER", payload: userData });

            return { token, userData };

        } catch (error) {
            
            const errorMessage = error.response?.data?.message || "Error desconocido al iniciar sesión";
            console.error("Error al iniciar sesión:", errorMessage);
            throw new Error(errorMessage);
        }
    };

    return (
        <UsersContext.Provider value={{ user, registerUser, loginUser }}>
            {children}
        </UsersContext.Provider>
    );

}

export const useUsers = () => useContext(UsersContext);

