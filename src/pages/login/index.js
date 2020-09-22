import React from "react";
import { Form, Input, Grid, Card } from "@alifd/next";

const FormItem = Form.Item;
const { Row, Col } = Grid;

export default function Login() {
  return (
    <Row style={{ height: "100vh" }} justify="center" align="center">
      <Col>
        <Card free style={{ width: 500, margin: "auto" }}>
          <Card.Header title="Simple Card" />
          <Card.Content>
            <Form
              loading={true}
              style={{ width: 400 }}
              labelTextAlign="left"
              size="medium"
              labelAlign="inset"
            >
              <FormItem label="username" required asterisk={false}>
                <Input name="username" trim />
              </FormItem>
              <FormItem label="password" required asterisk={false}>
                <Input name="password" trim />
              </FormItem>

              <FormItem label=" ">
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
