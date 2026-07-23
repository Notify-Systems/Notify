import express from "express"

const router = express.Router();

import authRoutes from "./features/auth/auth.route.js";
import userRoutes from "./features/user/user.route.js";
import collectionRoutes from "./features/collection/collection.route.js";

router.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

router.use("/collection", collectionRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export default router;
