import { useAppDispatch } from "../app/hooks";
import { setItem } from "../slices/algoTypeSlice";
import bubbleAlgo from "../algorithms/BubbleSort";
import "./AlgoButtons.scss";

export default function AlgoButtons() {
  const dispatch = useAppDispatch();

  function setAlgoType(algoType: Function) {
    dispatch(setItem(algoType));
  }

  return (
    <div className="algo_buttons_container">
      <button className="algo_button" onClick={() => setAlgoType(bubbleAlgo)}>
        Bubble Sort
      </button>
    </div>
  );
}
