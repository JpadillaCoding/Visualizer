import randomizer from "../../helpers/randomizer";
import "./sorter.scss";
import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setItems } from "../../slices/graphValuesSlice";
import bubbleAlgo from "../../algorithms/BubbleSort";


export default function GraphVisual() {

  const dispatch = useAppDispatch()
  const graphValues = useAppSelector((state: RootState) => state.graphValues.values)

  function reset() {
    dispatch(setItems(randomizer(100, 30)))
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
        <button onClick={() => bubbleAlgo(graphValues, 50, dispatch)} className="button">
          Organize
        </button>
      </div>
    </div>
  );
}
