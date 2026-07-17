import express from "express"

const router = express.Router();

import userRoutes from "./user.route.js"

router.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

router.use("/user", userRoutes);

export default router
