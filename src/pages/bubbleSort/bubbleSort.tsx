import React, { useEffect, useState } from "react";
import randomizer from "../../helpers/randomzier";

export default function BubbleSort() {
  let [items, setItems] = useState(randomizer(100, 5));

  async function bubbleAlgo(arr: Array<number>, len: number) {
    let swapped: boolean = false; // check if there have been any swaps
    for (let i = 0; i < len; i++) {
      //outer loop to go through each index
      swapped = false;
      for (let j = 0; j < len; j++) {
        //inner loop used for comparison and moving items to sort
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
          await new Promise((resolve) => setTimeout(resolve, 3000));
          setItems([...arr])
        }
      }
      console.log(items);
      if (!swapped) break;
    }
  }

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
