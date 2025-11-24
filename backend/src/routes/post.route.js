import { Router } from "express";   
import { createPost, getPosts, updatePost, deletePost } from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);
router.route("/update/:id").patch(updatePost); // to be implemented
router.route("/delete/:id").delete(deletePost); // to be implemented


export default router;