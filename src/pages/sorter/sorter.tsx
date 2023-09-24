import randomizer from "../../helpers/randomizer";
import "./sorter.scss";
import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setItems } from "../../slices/graphValuesSlice";


export default function GraphVisual() {

  const dispatch = useAppDispatch()
  const graphValues = useAppSelector((state: RootState) => state.graphValues.values)

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
          dispatch(setItems([...arr]))
        }
      }

      if (!swapped) break;
    }
  }
  function reset() {
    setItems(randomizer(100, 30))
  }

  const renderedNums = graphValues.map((number:number, index:number) => {
    return (
      <div className="single_value_container" key={index}>
        <div className="bars" style={{ height: `${number * 1.7}px` }}></div>
        <p className="value">
          {number}
        </p>
      </div>
    );
  });

  return (
    <div className="sort_container">
      <div className="values_container">{renderedNums}</div>
      <div className="button_container">
        <button onClick={reset} className="button">
            Reset
        </button>
        <button onClick={() => bubbleAlgo(graphValues, 50)} className="button">
          Organize
        </button>
      </div>
    </div>
  );
}
