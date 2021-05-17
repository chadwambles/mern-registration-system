import express from "express";
import user from "../controllers/user";
import auth from "../controllers/auth";

const router = express.Router();

router.route("/api/users").get(user.list).post(user.create);

router
  .route("/api/users/:userId")
  .get(auth.requireLogin, user.read)
  .put(auth.requireLogin, auth.hasAuth, user.update)
  .delete(auth.requireLogin, auth.hasAuth, user.remove);

router.param("userId", user.userByID);

export default router;
