import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "antd";
import { connect } from "dva";

import { Title } from "components";
import { JobList, JobExtra, JobAdd } from "./components";
import styles from "./home.module.css";

function Home({ notifies, loading }) {
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
            loading={loading.effects["home/fetchNotify"]}
            size="small"
            title={<Title title="Danh sách thông báo" />}
            extra={<JobExtra showModal={showModal} />}
          >
            <div className={styles["job-list"]}>
              <JobList notifies={notifies} />
            </div>
          </Card>
        </Col>
      </Row>
      <JobAdd visible={visible} onCancel={onCancel} onFinish={onFinish} />
    </>
  );
}

export default connect(({ home, loading }) => ({
  notifies: home.notifies,
  loading,
}))(Home);
