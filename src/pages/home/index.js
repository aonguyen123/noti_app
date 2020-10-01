import React from "react";
import {
  List,
  Avatar,
  Row,
  Col,
  Form,
  Input,
  Button,
  //   notification,
} from "antd";
import { connect } from "dva";

function Home({ notifies, loading }) {
  //   const [noti, setNoti] = useState([]);

  async function sendMessage(values) {
    // const data = { ...values, idUser: "5f4c7bc4464c8f4581852d53", token };
    // const response = await request("POST", "/notify/create", data, null);
    // setNoti([response.data, ...noti]);
    // notification.open({
    //   type: "success",
    //   message: "New message",
    //   description: response.data.name,
    // });
  }
  console.log("home");
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Col xxl={12} xl={12} lg={12} md={24}>
          <List
            itemLayout="horizontal"
            dataSource={notifies}
            loading={loading.effects["app/fetchNotify"]}
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

export default connect(({ app, loading }) => ({
  notifies: app.notifies,
  loading,
}))(Home);
