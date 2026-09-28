import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import controller from "./share.controller.js";
import schema from "./share.schema.js";
import idSchema from "../../shared/schema/id.schema.js"
import auth from "../../shared/middleware/auth.middleware.js";
import userExist from "../../shared/middleware/userExist.middleware.js";
import can from "../../shared/permission/permission.middleware.js";

router.use(auth);
router.use(userExist)


router.post("/collection/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "collection") ,controller.share('collection'));
router.post("/section/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "section") ,controller.share('section'));
router.post("/task/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "task") ,controller.share('task'));
router.post("/note/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "note") ,controller.share('note'));

router.put("/collection/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "collection") ,controller.updateShare('collection'));
router.put("/section/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "section") ,controller.updateShare('section'));
router.put("/task/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "task") ,controller.updateShare('task'));
router.put("/note/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "note") ,controller.updateShare('note'));

router.delete("/collection/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "collection") ,controller.revokeShare('collection'));
router.delete("/section/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "section") ,controller.revokeShare('section'));
router.delete("/task/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "task") ,controller.revokeShare('task'));
router.delete("/note/:id", validation.body(schema.share), validation.params(idSchema),can("edit", "note") ,controller.revokeShare('note'));

export default router;