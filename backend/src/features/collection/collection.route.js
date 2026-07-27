import express from "express";
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import controller from "./collection.controller.js";
import schema from "./collection.schema.js";
import idSchema from "../../schema/id.schema.js"
import auth from "../../middleware/auth.middleware.js";
import colorSchema from "../../schema/color.schema.js";

router.use(auth);

router.post("/", validation.body(schema.create), controller.create);
router.get("/:id", validation.params(idSchema), controller.read);
router.get("/", controller.readAll);
router.update("/", validation.body(schema.update), validation.params(idSchema), controller.update);
router.update("/color", validation.body(colorSchema), validation.params(idSchema), controller.update);
router.update("/visibility", validation.body(schema.visibility), validation.params(idSchema), controller.update);

export default router;