import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        requred: true,
    },
    content: {
        type: String,
        required: true,
    },
    quize: {
        type: String,
        required: true,
    }, 
    level: {
        type: String,
        required: true,
    },
})

const Lesson = mongoose.model("Lesson", LessonSchema);

export default Lesson;