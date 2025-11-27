
// Check user login and password and give him a refresh token (in http cookies) and an access token


import path from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import usersJson from '../model/users.json' with { type: 'json' };

dotenv.config();

// Mock DB
const usersDB = {
    users: usersJson,
    setUsers(data) {
        this.users = data
    }
}

async function handleUserAuth(req, res) {
    const { username, password } = req.body;
    if (!username || !password ) {
        return res.status(400).json({'Message':'Require username and password'}); // HTTP 400 — Bad Request
    }
    const userMatch = usersDB.users.find(person => person.username === username);
    if(!userMatch) {
        return res.sendStatus(401); // HTTP 401 — Unauthenticated
    }
    const passwordMatch = await bcrypt.compare(password, userMatch.password);

    // Give user access and refresh tokens, when password match
    if (passwordMatch) {

        const accessToken = jwt.sign(
            {'username': userMatch.username},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '10m'} // 5–15 minutes on production
        )
        const refreshToken = jwt.sign(
            {'username': userMatch.username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        )

        // Save refresh token with current user in DB
        const otherUsers = usersDB.users.filter(person => person.username !== userMatch.username);
        const currentUser = {...userMatch, refreshToken};
        usersDB.setUsers([...otherUsers, currentUser])
        await fs.promises.writeFile(
            path.join(import.meta.dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        )

        // Send tokens
        res.cookie('refreshToken', refreshToken, { httpOnly: true , maxAge: 25 * 60 * 60 * 1000})
        return res.json({'accessToken ':accessToken});

    } else {
        return res.sendStatus(401);
    }
}

export default handleUserAuth