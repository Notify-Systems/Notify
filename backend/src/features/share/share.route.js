import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./share.controller.js";
import schema from "./share.schema.js";
import idSchema from "../../shared/schema/id.schema.js"
import auth from "../../shared/middleware/auth.middleware.js";
import userExist from "../../shared/middleware/userExist.middleware.js";
import can from "../../shared/permission/permission.middleware.js";

router.use(auth);
router.use(userExist)

router.post("/collection/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "collection") ,controller.shareCollection);

export default router;