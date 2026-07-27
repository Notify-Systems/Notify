import express from "express";
const router = express.Router();

import validation from "../../middleware/validation.middleware.js";
import controller from "./collection.controller.js";
import schema from "./collection.schema.js";
import idSchema from "../../schema/id.schema.js"
import auth from "../../middleware/auth.middleware.js";

router.use(auth);

router.post("/", validation.body(schema.create), controller.create);
router.get("/:id", validation.params(idSchema), controller.read);
router.update("/", validation.body(schema.update), validation.params(idSchema), controller.update);

export default router;