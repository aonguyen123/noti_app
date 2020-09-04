import React, { useEffect, useState } from "react";
import {
  List,
  Avatar,
  Row,
  Col,
  Form,
  Input,
  Button,
  notification,
} from "antd";
import "antd/dist/antd.css";
import { request } from "./utils/request";
import { requestFirebaseNotification, onMessageListener } from "./firebaseInit";

function App() {
  const [noti, setNoti] = useState([]);
  const [token, setToken] = useState("");

  requestFirebaseNotification()
    .then((firebaseToken) => {
      setToken(firebaseToken);
    })
    .catch((err) => {
      return err;
    });

  useEffect(() => {
    getNoti();
  }, []);
  onMessageListener()
    .then((payload) => {
      const { title, body } = payload.data;
      console.log(title, body);
      // toast.info(`${title}; ${body}`);
    })
    .catch((err) => {
      // toast.error(JSON.stringify(err));
    });

  async function getNoti() {
    const response = await request("GET", "/notify/getNotify", null, null);
    setNoti(response.data);
  }

  async function sendMessage(values) {
    const data = { ...values, idUser: "5f4c7bc4464c8f4581852d53", token };
    const response = await request("POST", "/notify/create", data, null);
    setNoti([response.data, ...noti]);
    notification.open({
      type: "success",
      message: "New message",
      description: response.data.name,
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col xxl={12} xl={12} lg={12} md={24}>
          <List
            itemLayout="horizontal"
            dataSource={noti}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src={item.idUser.avatar}>
                      {item.idUser.username.charAt(0).toUpperCase()}
                    </Avatar>
                  }
                  title={item.idUser.username}
                  description={item.name}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24}>
          <Form onFinish={sendMessage}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input message" }]}
            >
              <Input addonBefore="Message" placeholder="Enter a message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
