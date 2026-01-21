import jwt from 'jsonwebtoken';

export function generateToken(user) {
    return jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
}

export function generateAccountId() {
    return `${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
}