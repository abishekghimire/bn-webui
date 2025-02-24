import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import DropDown from "./DropDown";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;

const Navigation = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const babyNamesItems = [
    {
      label: "Popular Names",
      key: "popular",
      icon: <UserOutlined />,
    },
    {
      label: "Unique Names",
      key: "unique",
      icon: <UserOutlined />,
    },
  ];

  // Names by Origin Categories
  const namesByOriginItems = [
    {
      label: "English Names",
      key: "english",
      icon: <UserOutlined />,
    },
    {
      label: "Indian Names",
      key: "indian",
      icon: <UserOutlined />,
    },
  ];

  const namesByGenderItems = [
    {
      label: "Baby Boy Names",
      key: "english",
      icon: <UserOutlined />,
    },
    {
      label: "Baby Girl Names",
      key: "indian",
      icon: <UserOutlined />,
    },
  ];

  const namesByCelebrityItems = [
    {
      label: "English Names",
      key: "english",
      icon: <UserOutlined />,
    },
    {
      label: "Indian Names",
      key: "indian",
      icon: <UserOutlined />,
    },
  ];

  const handleMenuClick = (e) => {
    message.info(`You clicked on ${e.key}`);
    console.log("click", e);
  };

  const babyNamesMenuProps = {
    items: babyNamesItems,
    onClick: handleMenuClick,
  };

  const namesByOriginMenuProps = {
    items: namesByOriginItems,
    onClick: handleMenuClick,
  };

  const namesByGenderProps = {
    items: namesByGenderItems,
    onClick: handleMenuClick,
  };

  const namesByCelebrityProps = {
    items: namesByCelebrityItems,
    onClick: handleMenuClick,
  };

  const generateBreadcrumbItems = () => {
    const paths = router.asPath.split("/").filter(Boolean); // Get all parts of the current path

    return paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;
      return {
        title: <a href={url}>{path.charAt(0).toUpperCase() + path.slice(1)}</a>,
      };
    });
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          background: colorBgContainer,
        }}
      >
        <div
          style={{
            flex: "0 0 auto",
            marginRight: "1rem",
            marginLeft: "0",
          }}
        >
          <img
            src="/babynames.png"
            alt="Baby Names Logo"
            style={{
              width: "150px",
              height: "auto",
            }}
          />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
          }}
        >
          <Menu.Item>
            <DropDown menuProps={babyNamesMenuProps} buttonLabel="Baby Names" />
          </Menu.Item>
          <Menu.Item>
            <DropDown
              menuProps={namesByOriginMenuProps}
              buttonLabel="Names by Origin"
            />
          </Menu.Item>
          <Menu.Item>
            <DropDown
              menuProps={namesByGenderProps}
              buttonLabel="Names by Gender"
            />
          </Menu.Item>
          <Menu.Item>
            <DropDown
              menuProps={namesByCelebrityProps}
              buttonLabel="Celebrity"
            />
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          {generateBreadcrumbItems()}
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: "100vh",
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Baby Names ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
export default Navigation;
