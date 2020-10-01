import React from "react";
import { Form, Input, Grid, Card } from "@alifd/next";
import { connect } from "dva";

const FormItem = Form.Item;
const { Row, Col } = Grid;

function Login({ dispatch }) {
  function handleSubmit(values, error) {
    if (error) return;
    dispatch({ type: "auth/signin", users: values });
  }

  return (
    <Row style={{ height: "100vh" }} justify="center" wrap align="center">
      <Col xl={8} l={8} m={8} s={24} xs={24}>
        <Card free>
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
                <Input name="password" htmlType="password" trim />
              </FormItem>

              <FormItem>
                <Form.Submit
                  style={{ width: "100%" }}
                  type="primary"
                  validate
                  onClick={handleSubmit}
                >
                  SignIn
                </Form.Submit>
              </FormItem>
            </Form>
          </Card.Content>
        </Card>
      </Col>
    </Row>
  );
}

export default connect(({ loading }) => ({
  loading,
}))(Login);
