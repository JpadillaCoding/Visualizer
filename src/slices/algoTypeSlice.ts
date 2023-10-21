import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import bubbleAlgo from "../algorithms/BubbleSort";

interface AlgoTypeState {
  value: Function; //possibly not a function?
}

const initialState: AlgoTypeState = {
  value: bubbleAlgo,
};

export const algoTypeSlice = createSlice({
  name: "algoType",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Function>) => {
      state.value = action.payload; //example showed += check if = is fine
    },
  },
});
