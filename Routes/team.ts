import express from "express";
import { register,count } from "../Controllers/teamRegi";

const router = express.Router();

router.post("/register", register);
router.get("/count", count);

export default router;