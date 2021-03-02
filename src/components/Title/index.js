import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export default function TitleStyle({title}) {
    return <Title level={5}>{title}</Title>
}