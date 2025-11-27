
// Create new user and save in DB


import path from 'path';
import fs from 'fs';
import bcrypt from 'bcrypt';

import usersJson from '../model/users.json' with { type: 'json' };


// Mock DB
const usersDB = {
    users: usersJson,
    setUsers(data) {
        this.users = data
    }
}

async function handleNewUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password ) {
        return res.status(400).json({'Message':'Require username and password'}); // HTTP 400 — Bad Request
    }
    const duplicate = usersDB.users.find(person => person.username === username);
    if(duplicate) {
        return res.sendStatus(409); // HTTP 409 — Conflict
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Get password hash
        const newUser = {'username': username, 'password': hashedPassword};
        usersDB.setUsers([...usersDB.users, newUser]);
        await fs.promises.writeFile(
            path.join(import.meta.dirname, '..', 'model', 'users.json'),
            JSON.stringify(usersDB.users)
        )
        console.log(usersDB.users);
        return res.status(201).json({success:`Added new user successfully, username: ${username}`}); // HTTP 201 — Created
    } catch (error) {
        return res.status(500).json({'message':error.message}); // HTTP 500 — Internal server error
    }
}

export default handleNewUser