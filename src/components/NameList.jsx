import React, { useState } from "react";
import { Avatar, List, Select, Space } from "antd";

// Updated baby names data
const data = [
  {
    name: "Oliver",
    gender: "Boy",
  },
  {
    name: "Sophia",
    gender: "Girl",
  },
  {
    name: "Liam",
    gender: "Boy",
  },
  {
    name: "Ava",
    gender: "Girl",
  },
  {
    name: "Noah",
    gender: "Boy",
  },
  {
    name: "Isabella",
    gender: "Girl",
  },
  {
    name: "Ethan",
    gender: "Boy",
  },
  {
    name: "Mia",
    gender: "Girl",
  },
  {
    name: "Lucas",
  },
  {
    name: "Charlotte",
    gender: "Girl",
  },
];

const NameList = () => {
  const [filter, setFilter] = useState("All");

  // Filter names based on selected gender
  const filteredData = data.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Neutral") return !item.gender;
    return item.gender === filter;
  });

  // Handle filter change
  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Select
          value={filter}
          onChange={handleFilterChange}
          style={{ width: 120 }}
        >
          <Select.Option value="All">All</Select.Option>
          <Select.Option value="Boy">Boy</Select.Option>
          <Select.Option value="Girl">Girl</Select.Option>
          <Select.Option value="Neutral">Neutral</Select.Option>
        </Select>
      </Space>

      <List
        itemLayout="horizontal"
        dataSource={filteredData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{item.name}</a>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NameList;
