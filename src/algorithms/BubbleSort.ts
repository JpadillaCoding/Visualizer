import { setItems } from "../slices/graphValuesSlice";

export default async function bubbleAlgo(valuesArray: Array<number>, timer: number) {
  let len = valuesArray.length;
  let valuesSwappedCheck: boolean = false; // check if there have been any swaps

  for (let indexTracker = 0; indexTracker < len; indexTracker++) {
    valuesSwappedCheck = false; //outer loop to go through each index

    for (let valueComparison = 0; valueComparison < len; valueComparison++) {
      if (valuesArray[valueComparison] > valuesArray[valueComparison + 1]) {
        //inner loop used for comparison and moving items to sort
        let temp = valuesArray[valueComparison];
        valuesArray[valueComparison] = valuesArray[valueComparison + 1];
        valuesArray[valueComparison + 1] = temp;

        valuesSwappedCheck = true;

        await new Promise((resolve) => setTimeout(resolve, timer));
        setItems([...valuesArray]);
      }
    }

    if (!valuesSwappedCheck) break;
  }
}
