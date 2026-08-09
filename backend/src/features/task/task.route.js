import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./task.controller.js";
import schema from "./task.schema.js";
import idSchema from "../../shared/schema/id.schema.js"
import auth from "../../shared/middleware/auth.middleware.js";
import colorSchema from "../../shared/schema/color.schema.js";
import userExits from "../../shared/middleware/userExist.middleware.js"
import can from "../../shared/permission/permission.middleware.js";

router.use(auth);
router.use(userExits)

router.post("/", validation.body(schema.create), can("create", "task"), controller.create);
router.get("/:id", validation.params(idSchema), can("view", "task"),  controller.read);
router.get("/collection/:id", validation.params(idSchema), can("view", "collection"),  controller.readByCollection)
router.get("/section/:id", validation.params(idSchema), can("view", "section"),  controller.readBySection);
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), can("edit", "task"),  controller.update);
router.patch("/color/:id", validation.body(colorSchema), validation.params(idSchema), can("edit", "task"),  controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), can("owner", "task"), controller.update);
router.patch("/status/:id", validation.body(schema.status), validation.params(idSchema), can("edit", "task"),  controller.update);

export default router;