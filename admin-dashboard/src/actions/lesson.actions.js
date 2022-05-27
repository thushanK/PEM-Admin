import {FETCH_LESSON, FETCH_SINGLE_LESSON, CREATE_LESSON, UPDATE_LESSON, DELETE_LESSON} from "../constants/constant.js";
import * as api from '../api/index.js';
;

export const getLessons = () => async (dispatch) =>{
    try{
        const res = await api.fetchLessons();
        dispatch ({type: FETCH_LESSON, payload: res.data});
        return res;
    }catch (error){
        console.log("getting workshop error" + error);
    }
}


export const getSingleLesson = (id) => async () =>{
    try{
        const  {data} = await api.fetchLesson(id);
        return data;

    }catch (error){
        console.log("getting single lesson error" + error);
    }
}

export const createLessons = (module) => async (dispatch) =>{
    try{
        const res = await api.uploadLesson(module);
        dispatch ({type: CREATE_LESSON, payload: res.data})
        return{...res}
    }catch (error){
        console.log("create lesson error")
    }
} 

export const removeLesson = (id) => async (dispatch) =>{
    try{
        const res = await api.deleteLesson(id);
        return res;

    }catch (error){
        console.log("delete module" + error);
    }
}

export const updateSingleLesson = (module) => async (dispatch) =>{
    try {
        const res = await api.updateLesson(module);
        dispatch(getLessons())
        return res;

    }catch (error){
        console.log("update module" + error);
    }
}