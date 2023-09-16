import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import randomizer from "../helpers/randomizer";


interface GraphValuesState {
  values: Array<number>;
}

const initialState: GraphValuesState = {
    values: randomizer(100,30),
}

export const valuesSlice = createSlice({
    name: 'graphValues',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<number[]>) => {
            state.values = action.payload
        }
    }
})

export const { setItems } = valuesSlice.actions

export default valuesSlice.reducer