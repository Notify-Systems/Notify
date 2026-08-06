import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./section.controller.js";
import schema from "./section.schema.js";
import auth from "../../shared/middleware/auth.middleware.js";
import idSchema from "../../shared/schema/id.schema.js";
import tableExist from "../../shared/middleware/tableExist.js";
import colorSchema from "../../shared/schema/color.schema.js";

router.use(auth);

router.post("/", validation.body(schema.create), controller.create);
router.get("/:id", validation.params(idSchema), controller.read)
router.get("/collection/:id", validation.params(idSchema), controller.readAll)
router.patch("/:id", validation.body(schema.update), validation.params(idSchema), controller.update);
router.patch("/color/:id", validation.body(colorSchema), validation.params(idSchema), controller.update);
router.patch("/visibility/:id", validation.body(schema.visibility), validation.params(idSchema), controller.update);


export default router;