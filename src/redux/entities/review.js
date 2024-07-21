import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../constants/normalized-mock";

export const ReviewSlice = createSlice({
    name: 'review',
    initialState: {
        entities: normalizedReviews.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
        }, {}),
        ids: normalizedReviews.map((item) => item.id)
    },
    selectors: {
        selectReviewIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id]
    }
}); 

export const {
    selectReviewIds,
    selectReviewById
} = ReviewSlice.selectors;