import express from "express";
const router = express.Router();

import controler from "../controller/user.controller.js";
import auth from "../middleware/auth.middleware.js";

router.get("/me", auth, controler.view)

export default router;
