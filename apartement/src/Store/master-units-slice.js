import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import fetchAPI from "../API/unit-api-config";

export const saveUnit = createAsyncThunk("unit/saveUnit", async (unit) => {
  unit.id = nanoid();
  const unitData = await fetchAPI("units", "POST", true, unit);

  return unitData;
});

export const updateUnit = createAsyncThunk("unit/updateUnit", async (unit) => {
  const unitData = await fetchAPI("units", "PUT", true, unit);

  return unitData;
});

export const getAllUnit = createAsyncThunk("unit/getAllUnit", async () => {
  const unitData = await fetchAPI("units", "GET", true);
  return unitData;
});

const unitSlice = createSlice({
  name: "unit",
  initialState: {
    units: [],
    selectedUnit: undefined,
    loading: false,
  },
  reducers: {
    SET_UNITS: (state, action) => {
      state.units = action.payload;
    },
  },
  extraReducers: {
    [getAllUnit.fulfilled]: (state, action) => {
      state.units = action.payload;
      state.loading = false;
    },
    [getAllUnit.pending]: (state) => {
      state.loading = true;
    },
    [saveUnit.fulfilled]: (state) => {
      state.loading = false;
    },
    [saveUnit.pending]: (state) => {
      state.loading = true;
    },
  },
});

const { loadUnit, save, update, selectUnit, unselectUnit } = unitSlice.actions;

export default unitSlice;

export { loadUnit, save, update, selectUnit, unselectUnit };
