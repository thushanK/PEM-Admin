import React from 'react';
import Sidebar from '../Layout/navBar/NavBar';
import { Link } from 'react-router-dom';
import { FETCH_LESSON } from '../../constants/constant';
import {getLessons} from "../../actions/lesson.actions";

import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';

class LessonList extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          lessonList: [],
      }
  }
  
  async componentDidMount() {
      const res = await getLessons();
      this.setState({
        lessonList: res
      });
  }



  render(){
      const {lessonList} = this.state;
  return (
    <div className="app" >
    <Sidebar activemenu={'PACKAGE'} submenu={'PACKAGE_LIST'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Packages<br></br>
                <span className="text-muted small">Dashboard</span></h6>
            </div>

            <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <table class="table borderless customtable" id="package-table">
                    <thead>
                        <tr>
                        
                        <th className="font-08 text-dark2 ">Package ID</th>
                        <th className="font-08 text-dark2 ">Package Name</th>
                        <th className="font-08 text-dark2 ">Package Product</th>
                        <th className="font-08 text-dark2 ">Price</th>
                        <th className="font-08 text-dark2 ">Duration</th>
                        <th className="font-08 text-dark2 ">Quntity</th>
                        <div>
                        <th className="font-08 text-dark2 ">Actions</th>
                        </div>
                        </tr>
                    </thead>
                    <tbody >
                        {lessonList && lessonList.map((value , i) => this.renderTable(value , i))}
                      
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}

  renderTable = (lesson , index) => {
      console.log(lesson);
    return (
                        <tr key={lesson._id}>
                            <td>{`P${("00" + (index + 1)).slice(-3)}`}</td>
                            <td>{lesson.title}</td>
                            <td>{lesson.image}</td>
                            <td>{lesson.content}</td>
                            <td>{lesson.quize}</td>
                            <td>{lesson.level}</td>
                            <td><Link to={"/package/edit/" + lesson._id}><span className="badge badge-info rounded-0 bg-white text-success border border-secondary click font-weight-bold ">Edit</span></Link>
                            <Link to={"/package/delete/" + lesson._id}><span className="badge badge-info rounded-0 bg-white text-danger border border-secondary click font-weight-bold ml-2">Delete</span></Link>
                            </td>
                        </tr>
    )
  }
}

export default LessonList;
