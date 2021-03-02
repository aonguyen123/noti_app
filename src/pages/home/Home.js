import React, {useState} from "react";
import {Row, Col, Card} from "antd";
import {connect} from "dva";

import {Title} from "components";
import {JobList, JobExtra, JobAdd} from "./components";
import styles from "./home.module.css";

function Home({notifies, loading}) {
  const [visible, setVisible] = useState(false);
  //   async function sendMessage(values) {
  //     const data = { ...values, idUser: "5f4c7bc4464c8f4581852d53", token };
  //     const response = await request("POST", "/notify/create", data, null);
  //     setNoti([response.data, ...noti]);
  //     notification.open({
  //       type: "success",
  //       message: "New message",
  //       description: response.data.name,
  //     });
  //   }

  const data = [
    {
      id: 1,
      title: "Hoc Reactjs",
      color: "#f56a00",
      alias: "H",
      description: "Hoc JS master",
      status: 1,
      time: "4h30",
    },
    {
      id: 2,
      title:
        "Hoc tieng anh Hoc tieng anh Hoc tieng anh Hoc tieng anh Hoc tieng anh",
      color: "#7265e6",
      alias: "H",
      description: "Hoc JS master",
      status: 2,
      time: "4h30",
    },
    {
      id: 3,
      title: "Hoc Node js",
      color: "#ffbf00",
      alias: "H",
      description: "Hoc JS master",
      status: 3,
      time: "4h30",
    },
  ];

  function showModal() {
    setVisible(true);
  }

  function onCancel() {
    setVisible(false);
  }

  function onFinish(values) {
    console.log(values);
  }

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card
            size="small"
            title={<Title title="Danh sách thông báo" />}
            extra={<JobExtra showModal={showModal} />}
          >
            <div className={styles["job-list"]}>
              <JobList data={data} />
            </div>
          </Card>
        </Col>
      </Row>
      <JobAdd visible={visible} onCancel={onCancel} onFinish={onFinish} />
    </>
  );
}

export default connect(({app, loading}) => ({
  notifies: app.notifies,
  loading,
}))(Home);
