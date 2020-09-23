import React from "react";
import { Form, Input, Grid, Card } from "@alifd/next";

const FormItem = Form.Item;
const { Row, Col } = Grid;

export default function Login() {
  return (
    <Row style={{ height: "100vh" }} justify="center" align="center">
      <Col xl={5} l={5} m={15} xs={24} xxs={24} s={24}>
        <Card free style={{ width: 500, margin: "auto" }}>
          <Card.Header title="Sign In" />
          <Card.Content>
            <Form labelTextAlign="left" size="medium" labelAlign="inset">
              <FormItem
                label="username"
                required
                asterisk={false}
                hasFeedback
                requiredMessage="Please input your username"
              >
                <Input name="username" trim />
              </FormItem>
              <FormItem
                label="password"
                required
                asterisk={false}
                hasFeedback
                requiredMessage="Please input your password"
              >
                <Input name="password" trim />
              </FormItem>

              <FormItem>
                <Form.Submit
                  style={{ width: "100%" }}
                  type="primary"
                  validate
                  //   onClick={this.handleSubmit}
                >
                  Submit
                </Form.Submit>
              </FormItem>
            </Form>
          </Card.Content>
        </Card>
      </Col>
    </Row>
  );
}
