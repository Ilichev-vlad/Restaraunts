import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  `dish/getDishes`,
  async (restId, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restId}`);

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  }
);