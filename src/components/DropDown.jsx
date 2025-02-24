import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, message, Space, Menu } from "antd";

// Handle menu click event

// Baby Names Categories

const DropDown = ({ menuProps, buttonLabel }) => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Space>
        <p style={{ fontWeight: "bold" }}>{buttonLabel}</p>
        <DownOutlined />
      </Space>
    </Dropdown>
  </Space>
);

export default DropDown;
