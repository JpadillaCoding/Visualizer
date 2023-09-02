import React, { useState } from "react";

export default function BubbleSort() {
  let [items, setItems] = useState(randomizer(100, 5));

  function randomizer(max: number, amount: number) {
    const randomNums: Array<number> = [];
    for (let i = 0; i < amount; i++) {
      const num = Math.floor(Math.random() * max);
      randomNums.push(num);
    }
    return randomNums;
  }

  const randomNums = items.map((number, index) => {
    return <p key={index}>{number}</p>;
  });

  return (
    <div id="bubbleSort_parent_container">
      <div>{randomNums}</div>
    </div>
  );
}
