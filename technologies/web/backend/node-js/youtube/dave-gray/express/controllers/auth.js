
// Check user login and password and give him a refresh token (in http cookies) and an access token


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../model/User.js";


async function handleUserAuth(req, res) {
    const { username, password } = req.body;
    if (!username || !password ) {
        return res.status(400).json({'Message':'Require username and password'}); // HTTP 400 — Bad Request
    }
    const userMatch = await User.findOne({ username }).exec();
    if(!userMatch) {
        return res.sendStatus(401); // HTTP 401 — Unauthenticated
    }
    const passwordMatch = await bcrypt.compare(password, userMatch.password);

    // Give user access and refresh tokens, when password match
    if (passwordMatch) {

        const roles = Object.values(userMatch.roles);

        const accessToken = jwt.sign(
            {
                'userInfo': {
                    username,
                    'roles': roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '10m' } // 5–15 minutes on production
        )
        const refreshToken = jwt.sign(
            {username},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        )

        // Save refresh token with current user in DB
        userMatch.refreshToken = refreshToken;
        const result = await userMatch.save();

        // Send tokens
        res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite:'None', secure:true, maxAge: 25 * 60 * 60 * 1000})
        return res.json({'accessToken ':accessToken});

    } else {
        return res.sendStatus(401);
    }
}

export default handleUserAuth