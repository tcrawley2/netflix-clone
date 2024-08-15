import express from "express";
import {
  signup,
  login,
  logout,
  authCheck,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// best practice - auth routes should POST
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;
