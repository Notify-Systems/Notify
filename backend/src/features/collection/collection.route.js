import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./collection.controller.js";
import schema from "./collection.schema.js";
import idSchema from "../../shared/schema/id.schema.js"
import auth from "../../shared/middleware/auth.middleware.js";
import colorSchema from "../../shared/schema/color.schema.js";
import userExist from "../../shared/middleware/userExist.middleware.js";
import can from "../../shared/permission/permission.middleware.js";




router.use(auth);
router.use(userExist)

router.post("/", validation.body(schema.create), controller.create);
router.get("/me", controller.readAllMe);
router.get("/:id", validation.params(idSchema), can("view", "collection"),controller.read);
router.get("/", controller.readAll)
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), can("edit", "collection"), controller.update);
router.patch("/color/:id", validation.body(colorSchema), validation.params(idSchema), can("edit", "collection"), controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), can("owner", "collection"), controller.updateVisibility);

export default router;