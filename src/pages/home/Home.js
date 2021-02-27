import React from "react";
import {
  List,
  Avatar,
  Row,
  Col,
  Card
} from "antd";
import { connect } from "dva";

import styles from './home.module.css'

function Home({ notifies, loading }) {

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

  const data = [
    {
      title: 'Hoc Reactjs',
      color: '#f56a00',
      alias: 'H',
      description: 'Hoc JS master'
    },
    {
      title: 'Hoc tieng anh',
      color: '#7265e6',
      alias: 'H',
      description: 'Hoc JS master'
    },
    {
      title: 'Hoc Node js',
      color: '#ffbf00',
      alias: 'H',
      description: 'Hoc JS master'
    },
    {
      title: 'Hoc antdesign',
      color: '#00a2ae',
      alias: 'H',
      description: 'Hoc JS master'
    },
    {
        title: 'Hoc Node js',
        color: '#ffbf00',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc antdesign',
        color: '#00a2ae',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc Node js',
        color: '#ffbf00',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc antdesign',
        color: '#00a2ae',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc Node js',
        color: '#ffbf00',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc antdesign',
        color: '#00a2ae',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc Node js',
        color: '#ffbf00',
        alias: 'H',
        description: 'Hoc JS master'
      },
      {
        title: 'Hoc antdesign',
        color: '#00a2ae',
        alias: 'H',
        description: 'Hoc JS master'
      },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col span={10}>
          <Card 
            size='small'
            title='Danh sách công việc'
          >
              <div className={styles['job-list']}>
                <List
                    extra='hhooo'
                    size='small'
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                        avatar={
                            <Avatar  
                                style={{
                                    backgroundColor: item.color,
                                    verticalAlign: 'middle',
                                }} 
                            >
                                {item.alias}
                            </Avatar>
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={item.description}
                        />
                    </List.Item>
                    )}
                />
            </div>
        </Card>
      </Col>
    </Row>
  );
}

export default connect(({ app, loading }) => ({
  notifies: app.notifies,
  loading,
}))(Home);
