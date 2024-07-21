import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../constants/normalized-mock";

export const UserSlice = createSlice({
    name: 'user',
    initialState: {
        entities: normalizedUsers.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {}),
        ids: normalizedUsers.map((item) => item.id)
    },
    selectors: {
        selectUserIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id]
    }
}); 

export const {
    selectUserIds,
    selectUserById
} = UserSlice.selectors;