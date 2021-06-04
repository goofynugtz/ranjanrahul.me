import express from "express";
import controller from "./blogs.controller";

const router = express.Router();

router.route("/").get(controller.apiGetBlogs);

export default router;