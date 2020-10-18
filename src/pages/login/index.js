import React from "react";
import {Form, Input, Row, Col, Button} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default function Login() {

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Row style={{height: "100vh"}} justify="center" align="middle">
      <Col xxl={8} xl={8} lg={10} md={10} sm={10} xs={24}>
        
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
