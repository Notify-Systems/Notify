import express from "express"
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import schema from "./auth.schema.js";
import controller from "./auth.controller.js";


router.post("/", validation.body(schema.create),controller.create)
router.post("/login", validation.body(schema.login), controller.login)
router.get("/refresh", controller.refresh)

export default router