import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";

import DropDown from "./DropDown";
import { useRouter } from "next/router";
const { Header, Content, Footer } = Layout;

const Navigation = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const babyNamesItems = [
    {
      label: "Popular Names",
      key: "popular",
      icon: <UserOutlined />,
      onClick: () => router.push("/babynames/popularnames"),
    },
    {
      label: "Unique Names",
      key: "unique",
      icon: <UserOutlined />,
      onClick: () => router.push("/babynames/uniquenames"),
    },
  ];

  // Names by Origin Categories
  const namesByOriginItems = [
    {
      label: "English Names",
      key: "english",
      icon: <UserOutlined />,
      onClick: () => router.push("/babynames/englishnames"),
    },
    {
      label: "Indian Names",
      key: "indian",
      icon: <UserOutlined />,
      onClick: () => router.push("/babynames/indiannames"),
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
    const paths = router.asPath.split("/").filter(Boolean);

    return paths.map((path, index) => {
      const url = `/${paths.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <a href={url}>{path.charAt(0).toUpperCase() + path.slice(1)}</a>
        </Breadcrumb.Item>
      );
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
          <a href="/">
            <img
              src="/babynames.png"
              alt="Baby Names Logo"
              style={{
                width: "150px",
                height: "auto",
              }}
            />
          </a>
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
          {children}
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
