import { compare } from './../utils/password.js'
import * as queries from './../db/admin-queries.js'
import * as jwt from './../utils/jwt.js'

export async function authenticateAdmin(req, res) {

    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Email and Password are required' });
    }

    try {
        const user = await queries.getAdmin(req.body.email);

        console.log(req.body.password, user.password);

        if (!user || !(req.body.password == user.password)) {   // we should hash passwords in the database and use bcrypt compare 
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const tokenPayload = {
            name: user.name,
            email: user.email,
            id: user.id,
            admin: (req.body.email == 'moofk2002@gmail.com'),
        };

        const token = jwt.signToken(tokenPayload);
        res.json({ token });

    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export function authorizeAccess(req, res, next) {
    const authHeader = req.header('authorization');

    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const token = authHeader.split(' ')[1];
        if (!token) throw new Error('Format Error');

        const decoded = jwt.verifayToken(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}