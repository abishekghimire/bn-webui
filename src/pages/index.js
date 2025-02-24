import Navigation from "@/components/Navigation";
import AlphabetFilter from "@/components/AlphabetFilter";
import React from "react";

const index = () => {
  const items = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
    { name: "Eva" },
    { name: "Frank" },
    { name: "George" },
    { name: "Hannah" },
    { name: "Ivy" },
    { name: "Jack" },
    { name: "Kevin" },
    { name: "Liam" },
  ];
  return (
    <>
      <Navigation>
        <div style={{ padding: "20px" }}>
          <h2>Filter Items by Alphabet</h2>
          <AlphabetFilter items={items} />
        </div>
      </Navigation>
    </>
  );
};

export default index;
