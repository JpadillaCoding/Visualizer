import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import randomizer from "../helpers/randomizer";
import type { RootState } from "../app/store";
import { stat } from "fs";

interface GraphValuesState {
  value: Array<number>;
}

const initialState: GraphValuesState = {
    value: randomizer(100,30),
}

export const valuesSlice = createSlice({
    name: 'graphValues',
    initialState,
    reducers: {
        randomize: (state) => {
            state.value = randomizer(100,30)
        }
    }
})

export const {randomize} = valuesSlice.actions

export default valuesSlice.reducer