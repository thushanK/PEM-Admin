import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessons, removeLesson } from "../../actions/lesson.actions";
import "antd/dist/antd.css";
import { Table, Space, Button, Tooltip, message, Popconfirm, Skeleton, Collapse, Input, Row, Col, Select } from "antd";
import { DeleteFilled, EditFilled, PlusOutlined, DownloadOutlined, ClearOutlined, SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

import Sidebar from '../Layout/navBar/NavBar'


export default function LessonList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { Option } = Select;
  const { Panel } = Collapse;

  const [lesson, setLesson] = useState([]);
  const [lessonTypeFilter, setLessonTypeFilter] = useState([]);
  const lessonData = useSelector((state) => state.LessonReducer.lessons);

  useEffect(() => {
    setLesson(true);
    dispatch(getLessons());
  }, [dispatch]);


  // useEffect(() => {
  //   setLesson(lessonData);
 
  //   if (lessonData) {
  //     setLoading(false);
  //   }
  // }, [lessonData]);

  const deleteConfirm = async (e) => {
    const res = await dispatch(deleteConfirm(e.key));
    if (res?.status === 200) {
      setLesson(lesson.filter((lec) => lec._id !== e.key));
      message.success("Lesson deleted successfully");
    } else {
      message.error("Delete Error");
    }
  };

  const editConfirm = (e) => {
    history.push(`lecture/edit/${e.key}`);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Quize",
      dataIndex: "quize",
      key: "quize",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <>
            <Popconfirm title="Are you sure to delete this lecture?" onConfirm={() => deleteConfirm(record)} okText="Yes" cancelText="No">
              <Tooltip placement="bottom" title="Delete Lecture">
                <DeleteFilled />
              </Tooltip>
            </Popconfirm>
            <Tooltip placement="bottom" title="Edit Lecture">
              <EditFilled onClick={() => editConfirm(record)} />
            </Tooltip>
            <Tooltip placement="bottom" title="Download Lecture">
              <DownloadOutlined onClick={() => window.open(`http://localhost:5000/${record.filePath}`)} />
            </Tooltip>
          </>
        </Space>
      ),
    },
  ];

  const data = lessonTypeFilter?.map((lec) => ({
    key: lec._id,
    title: lec.title,
    image: lec.image,
    content: lec.content,
    quize: lec.quize,
    level: lec.level,
  }));

  const newLecture = () => {
    history.push("/lecture/add");
  };

  const headData = columns?.map((col) => col?.title);
  headData.pop();
  // const bodyData = data?.map((col) => [col.title, col.image, col.content, col.quize, col.level]);

  const header = {
    paddingLeft: 10,
    fontWeight: "bold",
    paddingTop: 25,
    paddingBottom: 15,
    color: "#1890ff",
  };

  

  return (
    <div>
      {/* {loading ? (
        <>
          <Skeleton active />
          <Skeleton active />
          <Skeleton active />
        </>
      ) : ( */}
      
      <div className="app" >
        <Sidebar activemenu={'LEESON'} submenu={'ADD_LESSON'} />
          <Collapse style={{ marginBottom: 50 }}>
            <Panel header="Search Lecture Materials">
              <Row>
                <Col span={6} style={{ margin: "10px" }}>
                 
                </Col>
                <Col span={6} style={{ margin: "10px" }}>
                  <Select >
                    <Option value="">All</Option>
                    <Option value="Lecture">Lectures</Option>
                    <Option value="Labs">Labs</Option>
                    <Option value="Tutorial">Tutorial</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col span={17} style={{ margin: "10px" }}>
                  <Button type="secondary" icon={<ClearOutlined />}>
                    Clear All
                  </Button>
                </Col>
                <Col span={6} style={{ margin: "10px" }}>
                  <Button type="primary" icon={<SearchOutlined />} >
                    Search
                  </Button>
                </Col>
              </Row>
            </Panel>
          </Collapse>
          <Button
           
          >
            <DownloadOutlined />
            Download Lecture Report
          </Button>
          <Table columns={columns}  dataSource={data} />
          <Tooltip title="Add Lecture">
            <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" className="fabBtn" style={{ position: "fixed" }} onClick={newLecture} />
          </Tooltip>
        </div>
      
    </div>
  );
}
