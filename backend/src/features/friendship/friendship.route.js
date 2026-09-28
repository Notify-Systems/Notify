import express from "express";
const router = express.Router();

import validation from "../../shared/middleware/validation.middleware.js";
import idSchema from "../../shared/schema/id.schema.js";
import auth from "../../shared/middleware/auth.middleware.js";
import userExist from "../../shared/middleware/userExist.middleware.js";
import controller from "./friendship.controller.js";

router.use(auth);
router.use(userExist);

router.post("/:receiverId", validation.params(idSchema), controller.invite);
router.delete("/cancel/:receiverId", validation.params(idSchema), controller.cancel);
router.put("/accepted/:senderId", validation.params(idSchema), controller.accepted);
router.put("/rejected/:senderId", validation.params(idSchema), controller.rejected);
router.delete("/:user2Id", validation.params(idSchema), controller.deleteFriendship)

export default router