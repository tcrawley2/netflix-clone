import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// best practice - auth routes should POST
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
