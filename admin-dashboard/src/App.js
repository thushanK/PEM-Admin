import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import './Components/Layout/navBar/custom.scss';


import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";

import CreateLesson from "./Components/Lesson/CreateLesson";

import LessonList from "./Components/Lesson/LessonsList";
const { Header, Content } = Layout;

function App() {
    const headerBar = {
      backgroundColor: "#278ea5",
      display: "flex",
      marginLeft: "10px",
    };
  
    const headerText = {
      color: "white",
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "Besley",
      padding: 0,
      margin: 0,
    };

    return (
        <div>
          <BrowserRouter>
            <ToastProvider>
            
              <Layout>
                
             
                  
                
                  
                  <Content
                    
                  >
                    <Switch>
                      
                      <Route path={"/"} exact component={CreateLesson}></Route>
                      <Route path={"/lesson/add"} exact component={CreateLesson}></Route>
                      <Route path={"/lesson/list"} exact component={LessonList}></Route>
                    </Switch>
                  </Content>
                
              
              </Layout>
              {/* <Footer/> */}
            </ToastProvider>
          </BrowserRouter>
        </div>
      );

}

export default App;