import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/normalized-mock";

export const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        entities: normalizedRestaurants.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {}),
        ids: normalizedRestaurants.map((item) => item.id)
    },
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id]
    }
}); 

export const {
    selectRestaurantIds,
    selectRestaurantById
} = RestaurantSlice.selectors;