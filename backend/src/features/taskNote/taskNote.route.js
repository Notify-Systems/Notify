import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./taskNote.controller.js";
import schema from "./taskNote.schema.js";
import idSchema from "../../shared/schema/id.schema.js"
import auth from "../../shared/middleware/auth.middleware.js";
import tableExist from "../../shared/middleware/tableExist.js";
import can from "../../shared/permission/permission.middleware.js"

router.use(auth);

router.post("/", validation.body(schema.create), tableExist.task, can("edit", "task"), controller.create);
router.get("/:id", validation.params(idSchema), tableExist.taskNote, can("view", "task"), controller.read);
router.get("/task/:id", validation.params(idSchema), tableExist.task, can("view", "task"), controller.readByTask)
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), tableExist.taskNote, can("edit", "task"), controller.update);

export default router;