import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001/api" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).payload.token
      }`;
    }
    return req;
  });

export const uploadLesson = (lesson) => API.post("/lesson", lesson);
export const fetchLessons = () => API.get("/lesson");
export const fetchLesson  = (id) => API.get(`/lesson/${id}`);
export const deleteLesson  = (id) => API.delete(`lesson/${id}`);
export const updateLesson  = (lesson) =>
  API.patch(`/lesson/${lesson.id}`, lesson);