import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();


const SECRET_KEY = process.env.JWT_SECRET;

export const registerUser = async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Usuario, email y contraseña son requeridos' });
    }

    try {

        const existingUser = await UserModel.findOne({email});
        if (existingUser) {
            return res.status(400).json({message: 'Email ya en uso'})
        }
        const encryptedPass = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({ name, email, password: encryptedPass });

        const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({
            message: "Usuario registrado con éxito",
            user: { id: newUser._id, name: newUser.name, email: newUser.email },
            token
        })
    }
    catch (error) {
        res.status(400).json({ message: "No se pudo registrar el usuario" });        
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
    }

    try {
        const user = await UserModel.findOne({email});
        if (!user) {
            return res.status(404).json({ message: 'Usuario y/o contraseña incorrectas' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Usuario y/o contraseña incorrectas' });
        }

        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ message: 'Inicio de sesión exitoso', token, 
            user: { id: user._id, email: user.email, name: user.name } });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};
