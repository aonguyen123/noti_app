import React from "react";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

export default function JobExtra({showModal}) {
  return (
    <Button
      type="primary"
      size="small"
      icon={<PlusOutlined />}
      onClick={showModal}
    >
      Tạo thông báo
    </Button>
  );
}
