import React from "react";
import {Modal, Form, Input, DatePicker} from "antd";
import {Title} from "components";

export default function JobAdd({visible, onCancel, onFinish}) {
  const [form] = Form.useForm();

  function onHide() {
    form.resetFields();
    onCancel();
  }

  return (
    <Modal
      visible={visible}
      title={<Title title="Tạo thông báo" />}
      onCancel={onHide}
      okText="Tạo mới"
      cancelText="Hủy"
      okButtonProps={{size: "small"}}
      cancelButtonProps={{size: "small"}}
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        onFinish={onFinish}
        size="small"
        wrapperCol={{span: 18}}
        labelCol={{span: 6}}
      >
        <Form.Item label="Tên thông báo" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Thời gian" name="time">
          <DatePicker format="DD-MM-YYYY" placeholder="" />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
