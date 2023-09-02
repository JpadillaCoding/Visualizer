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

  function bubbleAlgo(arr: Array<number>, n: number) {
    let i: number, j: number, temp: number;
    let swapped: boolean;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
      if ((swapped = false)) break;
    }
  }

  return (
    <div id="bubbleSort_parent_container">
      <div>{randomNums}</div>
    </div>
  );
}
