import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import bubbleAlgo from "../algorithms/BubbleSort";

function sortNumbers(a: any, b: any) {
  return a - b;
}
//default state of nothing working until a algo type is picked
interface AlgoTypeState {
  algoFunction: Function;
  algoName: String;
}

const initialState: AlgoTypeState = {
  algoFunction: sortNumbers,
  algoName: "Choose An Algorithm!",
};

export const algoTypeSlice = createSlice({
  name: "algoType",
  initialState,
  reducers: {
    setItem: (state: any, action) => {
      state.algoFunction = action.payload.function;
      state.algoName = action.payload.algoName;
    },
  },
});

export const { setItem } = algoTypeSlice.actions;

export default algoTypeSlice.reducer;
