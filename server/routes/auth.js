import express from "express";
import auth from "../controllers/auth";

const router = express.Router();

router.route("/auth/login").post(auth.login);
router.route("/auth/logout").get(auth.logout);

export default router;
