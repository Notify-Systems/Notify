import express from "express";
const router = express.Router();

import valdation from "../../middleware/validation.middleware.js"
import controler from "./user.controller.js";
import schema from "./user.schema.js";
import auth from "../../middleware/auth.middleware.js";

router.use(auth)

router.get("/me", controler.view)
router.delete("/me", controler.delete)
router.patch("/me", controler.updateProfile)

export default router;
