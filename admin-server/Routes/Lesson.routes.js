import express from "express";
const router = express.Router();

import {
    getLessons,
    getLesson,
    createLesson,
    updateLesson,
    deleteLesson,
} from "../Controllers/Lesson.controllers.js";

router.post("/", createLesson);
router.get("/:id", getLesson);
router.get("/", getLessons);
router.patch("/:id", updateLesson);
router.delete("/:id", deleteLesson);

export default router;
