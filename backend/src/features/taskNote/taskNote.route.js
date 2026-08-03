import express from "express";
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import controller from "./taskNote.controller.js";
import schema from "./taskNote.schema.js";
import idSchema from "../../schema/id.schema.js"
import auth from "../../middleware/auth.middleware.js";
import tableExist from "../../middleware/tableExist.js";

router.use(auth);
router.use(tableExist.user);

router.post("/", validation.body(schema.create), tableExist.task, controller.create);
router.get("/:id", validation.params(idSchema), tableExist.taskNote, controller.read);
router.get("/task/:id", validation.params(idSchema), tableExist.task, controller.readByTask)
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), tableExist.taskNote, controller.update);

export default router;