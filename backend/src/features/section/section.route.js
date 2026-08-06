import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./section.controller.js";
import schema from "./section.schema.js";
import auth from "../../shared/middleware/auth.middleware.js";
import idSchema from "../../shared/schema/id.schema.js";
import tableExist from "../../shared/middleware/tableExist.js";
import colorSchema from "../../shared/schema/color.schema.js";
import userExist from "../../shared/middleware/userExist.middleware.js";
import can from "../../shared/permission/permission.middleware.js"

router.use(auth);
router.use(userExist)

router.post("/", validation.body(schema.create), can("edit", "collection"), controller.create);
router.get("/:id", validation.params(idSchema), can("view", "section"), controller.read)
router.get("/collection/:id", validation.params(idSchema), can("view", "collection"), controller.readAll)
router.patch("/:id", validation.body(schema.update), can("edit", "section"), validation.params(idSchema), controller.update);
router.patch("/color/:id", validation.body(colorSchema), can("edit", "section"), validation.params(idSchema), controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), can("owner", "section"), controller.update);


export default router;