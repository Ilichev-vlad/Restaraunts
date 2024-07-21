import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";
import { getDish } from "./get-dish";

const entityAdapter = createEntityAdapter();

export const DishSlice = createSlice({
    name: 'dish',
    initialState: entityAdapter.getInitialState({
        requestStatus: "idle",
    }),
    selectors: {
        selectDishIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id],
        selectDishRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
    .addCase(getDishes.pending, (state) => {
        state.requestStatus = "pending";
    })
    .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
    })
    .addCase(getDishes.rejected, (state) => {
        state.requestStatus = "rejected";
    })
    .addCase(getDish.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setOne(state, payload);
    }),
}); 

export const {
    selectDishIds,
    selectDishById,
    selectDishRequestStatus
} = DishSlice.selectors;