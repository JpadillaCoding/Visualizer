import randomizer from "../helpers/randomizer";
import "./graphVisual.scss";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setItems } from "../slices/graphValuesSlice";
import AlgoButtons from "../components/AlgoButtons";

export default function GraphVisual() {
  const dispatch = useAppDispatch();
  const graphValues = useAppSelector(
    (state: RootState) => state.graphValues.values
  );
  const algoType = useAppSelector(
    (state: RootState) => state.algoType.algoFunction
  );
  const algoName = useAppSelector(
    (state: RootState) => state.algoType.algoName
  );
  function reset() {
    dispatch(setItems(randomizer(100, 30)));
  }

  const renderedNums = graphValues.map((number: number, index: number) => {
    return (
      <div className="single_value_container" key={index}>
        <div className="bars" style={{ height: `${number * 1.7}px` }}></div>
        <p className="value">{number}</p>
      </div>
    );
  });

  return (
    <div className="graph_visual_body">
      <h2 className="algorithm_name">{algoName}</h2>
      <div className="sort_container">
        <div className="values_container">{renderedNums}</div>
        <div className="sorter_button_container">
          <div className="sorter_action_buttons">
            <button onClick={reset} className="sorter_button">
              Reset
            </button>
            <button
              onClick={() => algoType(graphValues, 50, dispatch)}
              className="sorter_button"
            >
              Organize
            </button>
          </div>
          <AlgoButtons />
        </div>
      </div>
    </div>
  );
}
