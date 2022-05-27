import express from "express";
import Lesson from "../Model/Lesson.model.js";

const router = express.Router();

export const getLessons = async (req, res) => {
    try {
      const lessons = await Lesson.find({});
      return res.status(200).send(lessons);
    } catch (error) {
      return res.status(500).send(error);
    }
};

export const getLesson = async (req, res) => {
    try {
      const lessons = await Lesson.findById({ _id: req.params.id });
      if (!lessons) return res.status(404).send("Lesson not found");
      return res.status(200).send(lessons);
    } catch (error) {
      return res.status(500).send(error);
    }
  };

  export const createLesson = (async(req, res)=>{
    try {
      const { title } = req.body;
      const checkLesson = await Lesson.findOne({ title });
      if (checkLesson) return res.status(409).send("Lesson already exits");
  
      const lesson = new Lesson({ ...req.body });
  
      lesson.save((error, savedLesson) => {
        if (error) return res.status(400).send(error);
        return res.status(200).send(savedLesson);
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  });

  export const updateLesson = async (req, res) => {
    try {
      const checkLesson = await Lesson.findById({ _id: req.params.id });
      if (!checkLesson) return res.status(404).send("Lesson does not exits");
  
      await Lesson.updateOne({ _id: req.params.id }, req.body);
      return res.status(200).send("Lesson updated");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  export const deleteLesson = async (req, res) => {
    try {
      const checkLesson = await Lesson.findOne({ _id: req.params.id });
      if (!checkLesson) return res.status(404).send("Lesson does not exits");
  
      await checkLesson.remove((error, _) => {
        if (error) return res.status(400).send(error);
        return res.status(200).send("Lesson deleted");
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };