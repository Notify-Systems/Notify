import express from "express"

const router = express.Router();

import authRoutes from "./auth.route.js"
import userRoutes from "./user.route.js"

router.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

router.use("/user", userRoutes)
router.use("/auth", authRoutes);

export default router
