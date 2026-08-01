import express from "express";
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import controller from "./task.controller.js";
import schema from "./task.schema.js";
import idSchema from "../../schema/id.schema.js"
import auth from "../../middleware/auth.middleware.js";
import colorSchema from "../../schema/color.schema.js";
import tableExist from "../../middleware/tableExist.js";

router.use(auth);
router.use(tableExist.user);

router.post("/", validation.body(schema.create), controller.create);
router.get("/:id", validation.params(idSchema), tableExist.task, controller.read);
router.get("/collection/:id", validation.params(idSchema), tableExist.collection, controller.readByCollection)
router.get("/section/:id", validation.params(idSchema), tableExist.section, controller.readBySection);
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), tableExist.task, controller.update);
router.patch("/color/:id", validation.body(colorSchema), validation.params(idSchema), tableExist.task, controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), tableExist.task, controller.update);
router.patch("/status/:id", validation.body(schema.status), validation.params(idSchema), tableExist.task, controller.update);

export default router;