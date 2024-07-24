import { configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { DishSlice } from "./entities/dish/dish";
import { ReviewSlice } from "./entities/review/review";
import { UserSlice } from "./entities/user/user";

export const store = configureStore({reducer: {
    [RestaurantSlice.name]: RestaurantSlice.reducer,
    [DishSlice.name]: DishSlice.reducer,
    [ReviewSlice.name]: ReviewSlice.reducer,
    [UserSlice.name]: UserSlice.reducer
}});