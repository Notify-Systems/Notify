import express from "express";
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import controller from "./collection.controller.js";
import schema from "./collection.schema.js";
import idSchema from "../../schema/id.schema.js"
import auth from "../../middleware/auth.middleware.js";
import colorSchema from "../../schema/color.schema.js";
import tableExist from "../../middleware/tableExist.js";


router.use(auth);
router.use(tableExist.user)

router.post("/", validation.body(schema.create), controller.create);
router.get("/me", controller.readAllMe);
router.get("/:id", validation.params(idSchema), tableExist.collection, controller.read);
router.get("/", controller.readAll)
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), tableExist.collection, controller.update);
router.patch("/color/:id", validation.body(colorSchema), validation.params(idSchema), tableExist.collection, controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), tableExist.collection, controller.updateVisibility);

export default router;