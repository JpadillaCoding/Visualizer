import React, { useState } from "react";
import randomizer from "../../helpers/randomzier";
import "./bubbleSort.scss";

export default function BubbleSort() {
  let [items, setItems] = useState(randomizer(100, 30));

  async function bubbleAlgo(arr: Array<number>, timer: number) {
    let len = arr.length;
    let swapped: boolean = false; // check if there have been any swaps

    for (let i = 0; i < len; i++) {
      swapped = false; //outer loop to go through each index

      for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
          //inner loop used for comparison and moving items to sort
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          swapped = true;

          await new Promise((resolve) => setTimeout(resolve, timer));
          setItems([...arr]);
        }
      }

      if (!swapped) break;
    }
  }
  function reset() {
    setItems(randomizer(100, 30))
  }

  const renderedNums = items.map((number, index) => {
    return (
      <div className="single_value_container">
        <div className="bars" style={{ height: `${number * 1.7}px` }}></div>
        <p key={index} className="value">
          {number}
        </p>
      </div>
    );
  });

  return (
    <div className="bubbleSort_container">
      <div className="values_container">{renderedNums}</div>
      <div className="button_container">
        <button onClick={reset} className="button">
            Reset
        </button>
        <button onClick={() => bubbleAlgo(items, 50)} className="button">
          Organize
        </button>
      </div>
    </div>
  );
}
