
// Create new user and save in DB


import bcrypt from "bcrypt";
import User from "../model/User.js";


async function handleNewUser(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res
            .status(400)
            .json({ Message: "Require username and password" }); // HTTP 400 — Bad Request
    }

    // Look for duplicate
    const duplicate = await User.findOne({ username }).exec();
    if (duplicate) {
        return res.sendStatus(409); // HTTP 409 — Conflict
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Get password hash

        // Create and store user
        const result = await User.create({
             username,
            'password': hashedPassword
        });

        if (result) {
            return res
            .status(201)
            .json({
                'success': `Added new user successfully, username: ${username}`,
            }); // HTTP 201 — Created
        } else {
            return res.status(500).json('DB error.')
        }

    } catch (error) {
        return res.status(500).json({ 'message': error.message }); // HTTP 500 — Internal server error
    }
}

export default handleNewUser;
