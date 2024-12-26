import jwt from 'jsonwebtoken';



export const authToken = (req, res, next) => {

    const SECRET_KEY = process.env.JWT_SECRET;

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado: no se brindó token' });
    }

    try{
        const user = jwt.verify(token, SECRET_KEY);
        req.user = user;
        next();

    }catch(error){
        return res.status(403).json({ message: 'Token inválido' });
    }   
};