import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import bubbleAlgo from "../algorithms/BubbleSort";


function sortNumbers(a:any,b:any){return a-b}
interface AlgoTypeState {
  value: Function; 
}

const initialState: AlgoTypeState = {
  value: sortNumbers,
};

export const algoTypeSlice = createSlice({
  name: "algoType",
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<Function>) => {
      state.value = action.payload; 
    },
  },
});

export const { setItem } = algoTypeSlice.actions

export default algoTypeSlice.reducer