import { setItems } from "../slices/graphValuesSlice";

export default async function bubbleAlgo(stateValues: Array<number>, timer: number) {
  let mutableValues = [...stateValues]
  let len = mutableValues.length;
  let valuesSwappedCheck: boolean = false; // check if there have been any swaps

  for (let indexTracker = 0; indexTracker < len; indexTracker++) {
    valuesSwappedCheck = false; //outer loop to go through each index

    for (let valueComparison = 0; valueComparison < len; valueComparison++) {
      if (mutableValues[valueComparison] > mutableValues[valueComparison + 1]) {
        //inner loop used for comparison and moving items to sort
        let temp = mutableValues[valueComparison];
        mutableValues[valueComparison] = mutableValues[valueComparison + 1];
        mutableValues[valueComparison + 1] = temp;

        valuesSwappedCheck = true;

        await new Promise((resolve) => setTimeout(resolve, timer));
        setItems([...mutableValues]);
      }
    }

    if (!valuesSwappedCheck) break;
  }
}
