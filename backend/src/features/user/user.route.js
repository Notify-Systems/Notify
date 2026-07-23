import express from "express";
const router = express.Router();

import valdation from "../../middleware/validation.middleware.js"
import controller from "./user.controller.js";
import schema from "./user.schema.js";
import auth from "../../middleware/auth.middleware.js";

router.use(auth)

router.get("/me", controller.view)
router.delete("/me", controller.delete)
router.patch("/me", valdation.body(schema.updateProfile), controller.updateProfile)

export default router;
