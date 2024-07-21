import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDish = createAsyncThunk(
  `dish/getDish`,
  async (dishId, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);

    const result = await response.json();

    if (!result) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  }
);