import {
  FETCH_LESSON,
  FETCH_SINGLE_LESSON,
  CREATE_LESSON,
  UPDATE_LESSON,
  DELETE_LESSON,
} from "../constants/constant";

const LessonReducer = (state = { lessons: null, lesson: null }, action) => {
  switch (action.type) {
    case CREATE_LESSON:
      return { ...state, lesson: action?.payload };
    case FETCH_LESSON:
      return { ...state, lessons: action?.payload };
    case FETCH_SINGLE_LESSON:
      return { ...state, lesson: action?.payload };
    case UPDATE_LESSON:
      return state;
    case DELETE_LESSON:
      return state;
    default:
      return state;
  }
};

export default LessonReducer;
