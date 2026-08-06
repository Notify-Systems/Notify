import express from "express";
const router = express.Router();

import valdation from "../../shared/middleware/validation.middleware.js";
import controller from "./user.controller.js";
import schema from "./user.schema.js";
import auth from "../../shared/middleware/auth.middleware.js";
import userExist from "../../shared/middleware/userExist.middleware.js";

router.use(auth);
router.use(userExist)

router.get("/me", controller.view);
router.delete("/me", controller.delete);
router.patch("/me", valdation.body(schema.updateProfile), controller.update);

export default router;
