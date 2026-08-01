import express from "express"

const router = express.Router();

import authRoutes from "./features/auth/auth.route.js";
import userRoutes from "./features/user/user.route.js";
import collectionRoutes from "./features/collection/collection.route.js";
import sectionRoutes from "./features/section/section.route.js"
import taskRoutes from "./features/task/task.route.js";

router.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/collection", collectionRoutes);
router.use("/section", sectionRoutes);
router.use("/task", taskRoutes)

export default router;
