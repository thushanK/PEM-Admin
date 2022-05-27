import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Sidebar from '../Layout/navBar/NavBar'
import {FormInput , FormSelect , MultiFormSelect} from './../Layout/Form/Form'
import {createLessons} from "../../actions/lesson.actions";
import {DatePicker, message} from 'antd';
// import { ThemeProvider, createGlobalStyle } from 'styled-components';




const EditLesson = () => {

    const dispatch = useDispatch();

    const [loadingBtn, setLoadingBtn] = useState(false);
    //initial data in the Form
    const [moduleData, setLessonData] = useState({
        title: '',
        image: '',
        content: '',
        quize: '',
        level: ''
    })


    //Passing Module Data to the Database
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoadingBtn(true)
        const passData ={
            title: moduleData.title,
            image:moduleData.image,
            content:moduleData.content,
            quize:moduleData.quize,
            level:moduleData.level
            
        }
        const res = await dispatch(createLessons({...passData}));
        setLessonData({title:'', image: '', content: '', quize: '',level: ''})
        if(res.status === 200){
            message.success("Lesson Created Successfully")
        } else {
            message.error("An Error in Creating a Lesson")
        }
        setLoadingBtn(false);

    }
    // const {errors} = this.state;




     
   

    
        
    return (

        <div className="app" >
        <Sidebar activemenu={'LEESON'} submenu={'ADD_LESSON'} />
        <main>
            <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white mt-1" >
                    <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Create Lesson<br></br>
                    <span className="text-muted small">Add a new Lesson to the system</span></h6>
                </div>
                <div className="col-12 shadow-sm rounded bg-white mt-3 pb-1" >
                <form >
                <div className="row mt-1 pb-3" >
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Title'}
                                placeholder={'Enter lesson title'}
                                name="title"
                                // error={ errors.title}
                                error_meesage={'*Package name is required'}
                                id="titleLabel"
                                value={moduleData.title}
                                onChange={(e) => setLessonData({...moduleData, title: e.target.value})}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Image'}
                                placeholder={'Enter image'}
                                name="image"
                                // error={ errors.image}
                                error_meesage={'*Image is required'}
                                id="moduleCodeLabel"
                                value={moduleData.image}
                                onChange={(e) =>setLessonData({...moduleData, image: e.target.value})}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Content'}
                                placeholder={'Enter content'}
                                name="content"
                                // error={ errors.content}
                                error_meesage={'*Content is required'}
                                id="moduleCodeLabel"
                            value={moduleData.content}
                            onChange={(e) =>setLessonData({...moduleData, content: e.target.value})}
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                        <FormSelect 
                                label={'Level'}
                                options={AT_OPTIONS}
                                name="level"
                                // error={ errors.level}
                                error_meesage={'*Level is required'}
                                id="moduleCodeLabel"
                                picker="level"
                                value={moduleData.level}
                                onChange={(e) => setLessonData({...moduleData, level: e.target.value})}
                           
                            />
                    </div>
                    <div className="col-md-6 mt-1 mb-1" >
                            <FormInput 
                                label={'Number of Quiz'}
                                placeholder={'Enter Number of Quiz'}
                                // error={ errors.quize}
                                name="quize"
                                error_meesage={'*Number of quiz is required'}
                                value={moduleData.quize}
                                onChange={(e) =>setLessonData({...moduleData, quize: e.target.value})}
                            />
                    </div>
                    <div className="col-md-12 mt-1 mb-1" >
                            <button type="submit" className="btn btn-primary"onClick={handleSubmit}>Submit</button>
                            {/* <button type="reset" className="btn-outline-secondary mt-2 btn btn-sm px-2 " onClick={this.clear}>Reset</button> */}
                    </div>
                </div>
                </form>
                </div>
            </div>
            </div>
        </main>
        
    </div>

    );}

    


const AT_OPTIONS = [{ label : 'Select English Language Levels' ,value : "" } , 
...['A1 (Beginner)', 'A2 (Elementary English)', 'B1 (Intermediate English)', 'B2 (Upper-Intermediate English)', 'C1 (Advanced English)', 'C2 (Proficiency English)'].map( i => {
    return{
        label :  i  ,
         value : i 
    }
})];

export default EditLesson;
