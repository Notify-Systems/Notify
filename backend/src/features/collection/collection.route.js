import express from "express";
const router = express.Router();

import valdation from "../../middleware/validation.middleware.js"
import controller from "./collection.controller.js";
import schema from "./collection.schema.js";
import auth from "../../middleware/auth.middleware.js";

router.use(auth)

router.post("/", valdation.body(schema.create), controller.create)

export default router;