// Purpose:
// Protect routes.

// Responsibilities:

// Read token from request

// Verify token

// Extract userId

// Attach userId to request

// Block unauthorized access

// ❌ No DB writes
// ❌ No response formatting

// Middleware = gatekeeper
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authMiddleware;