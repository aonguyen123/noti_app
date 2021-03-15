import React from "react";
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
const defaultProps = {
  route: {
    path: "/",
    routes: [
      {
        path: "/welcome",
        name: "Hello",
        icon: <SmileOutlined />,
        component: "./Welcome",
      },
      {
        path: "/admin",
        name: "admin",
        icon: <CrownOutlined />,
        access: "canAdmin",
        component: "./Admin",
        routes: [
          {
            path: "/admin/sub-page1",
            name: "admin 1",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page2",
            name: "admin2",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page3",
            name: "admin 3",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
        ],
      },
      {
        name: "List",
        icon: <TabletOutlined />,
        path: "/list",
        component: "./ListTableList",
        routes: [
          {
            path: "/list/sub-page",
            name: "List1",
            icon: <CrownOutlined />,
            routes: [
              {
                path: "sub-sub-page1",
                name: "list 1.1",
                icon: <CrownOutlined />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page2",
                name: "list 1.2",
                icon: <CrownOutlined />,
                component: "./Welcome",
              },
              {
                path: "sub-sub-page3",
                name: "list 1.3",
                icon: <CrownOutlined />,
                component: "./Welcome",
              },
            ],
          },
          {
            path: "/list/sub-page2",
            name: "list 2",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
          {
            path: "/list/sub-page3",
            name: "list 3",
            icon: <CrownOutlined />,
            component: "./Welcome",
          },
        ],
      },
      {
        path: "https://ant.design",
        name: "Ant Design",
        icon: <AntDesignOutlined />,
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default defaultProps;
