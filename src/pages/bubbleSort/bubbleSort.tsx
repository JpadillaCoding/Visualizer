import React, { useEffect, useState } from "react";

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

  function bubbleAlgo(arr: Array<number>, len: number) {
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setItems([...arr]);
        }
      }
    }
  }
  useEffect(() => {
    console.log(items);
  }, [items]);

  const renderedNums = items.map((number, index) => {
    return <p key={index}>{number}</p>;
  });
  return (
    <div id="bubbleSort_parent_container">
      <div>{renderedNums}</div>
      <button onClick={() => bubbleAlgo(items, items.length)}>
        Click to organize
      </button>
    </div>
  );
}
