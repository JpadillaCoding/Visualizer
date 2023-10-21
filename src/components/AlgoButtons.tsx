import { useAppDispatch } from "../app/hooks";
import { setItem } from "../slices/algoTypeSlice";
import bubbleAlgo from "../algorithms/BubbleSort";
import "./AlgoButtons.scss";

export default function AlgoButtons() {
  const dispatch = useAppDispatch();

  function setAlgoType(algoType: Function, algoName: String) {
    dispatch(setItem({function: algoType, algoName: algoName}));
  }

  return (
    <div className="algo_buttons_container">
      <button className="algo_button" onClick={() => setAlgoType(bubbleAlgo, "Bubble Sort")}>
        Bubble Sort
      </button>
    </div>
  );
}
