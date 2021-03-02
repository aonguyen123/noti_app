import React from "react";
import {List, Avatar, Row, Col, Tag} from "antd";
import {router} from "dva";
import QueueAnim from "rc-queue-anim";
import {DashboardOutlined} from "@ant-design/icons";

import {jobStatus} from "constant";
import styles from "./../../home.module.css";

const {Link} = router;

export default function JobList({data}) {
  function renderStatus(stt) {
    const res = jobStatus.find((i) => i.id === stt);
    if (res) {
      return (
        <Tag color={res.color} icon={res.icon}>
          {res.name}
        </Tag>
      );
    }
    return;
  }

  return (
    <List
      extra="hhooo"
      size="small"
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <QueueAnim
          delay={300}
          className="queue-simple"
          type="bottom"
          duration={1000}
        >
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: item.color,
                    verticalAlign: "middle",
                  }}
                >
                  {item.alias}
                </Avatar>
              }
              title={
                <Row gutter={[5, 5]}>
                  <Col span={24}>
                    <div className={styles["job-title"]}>
                      <Link to="https://ant.design">{item.title}</Link>
                      <p>
                        <DashboardOutlined style={{marginRight: "2px"}} />
                        {item.time}
                      </p>
                    </div>
                  </Col>
                  <Col span={24}>{renderStatus(item.status)}</Col>
                </Row>
              }
              description={item.description}
            />
          </List.Item>
        </QueueAnim>
      )}
    />
  );
}
