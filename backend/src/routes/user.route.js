import express from "express";
const router = express.Router();

import controler from "../controller/user.controller.js";
import auth from "../middleware/auth.middleware.js";

router.use(auth)

router.get("/me", controler.view)
router.delete("/me", controler.delete)
router.patch("/me", controler.updateProfile)

export default router;
