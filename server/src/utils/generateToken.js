// Purpose:
// JWT creation.

// Responsibilities:

// Create JWT using userId

// Set expiration

// Sign with secret

// ❌ No verification here
// (verification belongs in middleware)
import jwt from "jsonwebtoken";
const generateToken = (userId) => {
    return jwt.sign(
        {userId}, //only this will be shared with token/payload
        process.env.JWT_SECRET, //secret key
        {expiresIn: process.env.JWT_EXPIRES_IN } 
    );
}

export default generateToken;