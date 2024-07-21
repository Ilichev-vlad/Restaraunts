import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  `user/getUsers`,
  async (_, { rejectWithValue, fulfillWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/users/`);

    const result = await response.json();

    if (!result.length) {
      rejectWithValue("empty result");
    }

    return fulfillWithValue(result);
  }
);