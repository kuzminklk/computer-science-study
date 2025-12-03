
// Send access token in request with refresh token in http-only cookies


import jwt from "jsonwebtoken";
import User from "../model/User.js";


async function handleRefreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.sendStatus(401); // HTTP 401 — Unauthenticated
    }

    // Is there user with this refresh token?
    const userMatch = await User.findOne({ refreshToken }).exec();
    if (!userMatch) {
        return res.sendStatus(403); // HTTP 403 — Forbidden
    }

    // Verify refresh token, make access token and send it in response
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            const roles = Object.values(userMatch.roles);
            
            if (err || userMatch.username == !decoded.username) return sendStatus(403);
            const accessToken = jwt.sign(
                {
                    'userInfo': {
                        'username': userMatch.username,
                        'roles': roles
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10m' } // 5–15 minutes on production
            )
			res.json({ accessToken })
        }
    );
}

export default handleRefreshToken;
