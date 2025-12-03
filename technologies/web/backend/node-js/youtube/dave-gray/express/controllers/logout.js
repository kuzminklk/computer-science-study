
// Delete user refresh token (also need to delete access token on client)


import User from "../model/User.js";


async function handleLogout(req, res) {

    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.sendStatus(204) // HTTP 204 — OK, No Content
    }

    // Is refresh token in DB?
    const userMatch = await User.findOne({ refreshToken }).exec();
    if (!userMatch) {
        return res.clearCookie('refreshToken', refreshToken, { httpOnly:true, sameSite:'None', secure:true }).sendStatus(204);
    }

    // Clear refresh token for user in DB
    userMatch.refreshToken = '';
    const result = await userMatch.save();

    return res.clearCookie('refreshToken', refreshToken, { httpOnly:true, sameSite:'None', secure:true}).sendStatus(204); // On production add: 'secure: true' — to only serves on https

}


export default handleLogout   