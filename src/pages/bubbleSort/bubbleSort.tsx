import React from "react";

export default function BubbleSort() {
  function randomizer(max: number, amount: number) {
    for(let i = 0; i < amount; i++) {
        const num = Math.floor(Math.random() * max);
        items.push(num)
    }
}
let items:Array<number> = []

randomizer(100, 5)
  console.log(items)
  return(
      <div id="bubbleSort_parent_container">
        
      </div>
  ) 
}
