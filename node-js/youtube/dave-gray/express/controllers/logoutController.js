
// Delete user refresh token (also need to delete access token in frontend)


import path from 'path';
import fs from 'fs';

import usersJson from '../model/users.json' with { type: 'json' };


// Mock DB
const usersDB = {
    users: usersJson,
    setUsers(data) {
        this.users = data
    }
}


async function handleLogout(req, res) {

    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.sendStatus(204) // HTTP 204 — OK, No Content
    }

    // Is refresh token in DB?
    const userMatch = usersDB.users.find( (person) => person.refreshToken === refreshToken );
    if (!userMatch) {
        return res.clearCookie('refreshToken', refreshToken, { httpOnly: true , maxAge: 25 * 60 * 60 * 1000}).sendStatus(204); // On production add: 'secure: true' — to only serves on https
    }

    // Delete refresh token for user in DB
    const otherUsers = usersDB.users.filter((person) => person.refreshToken !== userMatch.refreshToken );
    const updatedUser = {...userMatch, refreshToken: ''};
    usersDB.setUsers([...otherUsers, updatedUser]);

    await fs.promises.writeFile(
        path.join(import.meta.dirname, '..', 'model', 'users.json'),
        JSON.stringify(usersDB.users)
    )

    return res.clearCookie('refreshToken', refreshToken, { httpOnly: true , maxAge: 25 * 60 * 60 * 1000}); // On production add: 'secure: true' — to only serves on https

}


export default handleUserAuth