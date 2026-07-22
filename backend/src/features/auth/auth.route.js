import express from "express"
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import schema from "./auth.schema.js";
import controler from "./auth.controller.js";


router.post("/", validation.body(schema.create),controler.create)
router.post("/login", validation.body(schema.login), controler.login)
router.get("/refresh", controler.refresh)

export default router