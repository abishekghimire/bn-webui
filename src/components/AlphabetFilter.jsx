import React, { useState } from "react";
import { Button, Row, Col, Space, List } from "antd";

const AlphabetFilter = ({ items }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleLetterClick = (letter) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      {/* Alphabet filter buttons */}
      <Space wrap>
        {Array.from(Array(26), (_, i) => String.fromCharCode(i + 65)).map(
          (letter) => (
            <Button key={letter} onClick={() => handleLetterClick(letter)}>
              {letter}
            </Button>
          )
        )}
      </Space>

      {/* List of filtered items */}
      <Row style={{ marginTop: 20 }}>
        <Col span={24}>
          <List
            bordered
            dataSource={filteredItems}
            renderItem={(item) => <List.Item>{item.name}</List.Item>}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AlphabetFilter;
