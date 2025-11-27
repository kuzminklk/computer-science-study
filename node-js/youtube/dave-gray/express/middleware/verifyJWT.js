
// Verify access token to give access


import path from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function verifyJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    if (!authHeader) return res.sendStatus(401) // HTTP 401 — Unauthorized
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403) // HTTP 403 Forbidden
            req.user = decoded.username;
            next();
        }
    )
}

export default verifyJWT
