
// Send access token in request with refresh token in http-only cookies


import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import usersJson from '../model/users.json' with { type: 'json' };

dotenv.config();


// Mock DB
const usersDB = {
    users: usersJson,
    setUsers(data) {
        this.users = data;
    },
};

function handleRefreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.sendStatus(401); // HTTP 401 — Unauthenticated
    }

    // Is there user with this refresh token?
    const userMatch = usersDB.users.find(
        (person) => person.refreshToken === refreshToken
    );
    if (!userMatch) {
        return res.sendStatus(403); // HTTP 403 — Forbidden
    }

    // Send access token in response
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || userMatch.username == !decoded.username) return sendStatus(403);
            const accessToken = jwt.sign(
                { username: decoded.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "10m" }
            );
			res.json({ accessToken })
        }
    );
}

export default handleRefreshToken;
