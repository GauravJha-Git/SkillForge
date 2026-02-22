// Purpose:
// Defines API endpoints.

// Responsibilities:

// Map URL → controller

// Attach middleware when needed

// Example conceptually:

// /register → register controller

// /login → login controller

// /me → auth middleware → me controller

// ❌ No business logic
// ❌ No DB logic

// Routes = “Which path calls which logic?”
import express from "express";
import { register, login, getMe } from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);

export default router;