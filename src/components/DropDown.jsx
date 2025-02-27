import React from "react";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const DropDown = ({ menuProps, buttonLabel }) => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Space>
        <p style={{ fontWeight: "600" }}>{buttonLabel}</p>
        <CaretDownOutlined />
      </Space>
    </Dropdown>
  </Space>
);

export default DropDown;
