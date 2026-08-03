import express from "express";
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import controller from "./section.controller.js";
import schema from "./section.schema.js";
import auth from "../../middleware/auth.middleware.js";
import idSchema from "../../schema/id.schema.js";
import tableExist from "../../middleware/tableExist.js";
import colorSchema from "../../schema/color.schema.js";

router.use(auth);
router.use(tableExist.user)

router.post("/", validation.body(schema.create),tableExist.collection ,controller.create);
router.get("/:id", validation.params(idSchema), tableExist.section, controller.read)
router.get("/collection/:id", validation.params(idSchema), tableExist.collection, controller.readAll)
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), tableExist.section, controller.update);
router.patch("/color/:id", validation.body(colorSchema), validation.params(idSchema), tableExist.section, controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), tableExist.section, controller.update);


export default router;