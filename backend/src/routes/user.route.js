import express from "express"
const router = express.Router();

import { validation } from "../middleware/validation.middleware.js";
import { userSchema } from "../validation/user.schema.js";
import {UserController} from "../controller/user.controller.js";
const controler = new UserController();

router.post("/", validation.body(userSchema.create),controler.create)

export default router