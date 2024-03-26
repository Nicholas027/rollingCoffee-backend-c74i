import { Router } from "express";
import { createUser } from "../controllers/users.controllers.js";

const router = Router();

router.route("/users").post(createUser);

export default router;