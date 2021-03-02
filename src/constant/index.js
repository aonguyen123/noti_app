import React from 'react'
import { BellOutlined, SoundOutlined, StopOutlined } from '@ant-design/icons'

const jobStatus = [
  {
    id: 1,
    name: "Chưa thông báo",
    color: "#1890ff",
    icon: <BellOutlined />
  },
  {
    id: 2,
    name: "Đã thông báo",
    color: "#52c41a",
    icon: <SoundOutlined />
  },
  {
    id: 3,
    name: "Đã hủy",
    color: "#bfbfbf",
    icon: <StopOutlined />
  },
];

export {jobStatus};
