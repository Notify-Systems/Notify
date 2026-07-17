import express from "express"
const router = express.Router();

import validation from "../middleware/validation.middleware.js";
import schema from "../validation/user.schema.js";
import controler from "../controller/user.controller.js";


router.post("/", validation.body(schema.create),controler.create)
router.post("/login", validation.body(schema.login), controler.login)

export default router