import { generateAccountId, generateToken } from "../libs/index.js";
import User from "../models/User.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ username, email, password, accountId: generateAccountId() });

    return res.status(201)
        .json({
            message: "User created successfully",
            user: { ...user, token: generateToken(user) }
        });
}

export const signin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await user.matchPassword(password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
    }

    return res.status(200)
        .json({
            message: "User signed in successfully.",
            user: { ...user, token: generateToken(user) },
        });
}