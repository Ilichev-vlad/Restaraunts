import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter();

export const UserSlice = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState({
        requestStatus: "idle",
    }),
    selectors: {
        selectUserIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
        selectUserRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
    .addCase(getUsers.pending, (state) => {
        state.requestStatus = "pending";
    })
    .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.requestStatus = "fulfilled";

        entityAdapter.setAll(state, payload);
    })
    .addCase(getUsers.rejected, (state) => {
        state.requestStatus = "rejected";
    })
}); 

export const {
    selectUserIds,
    selectUserById,
    selectUserRequestStatus
} = UserSlice.selectors;