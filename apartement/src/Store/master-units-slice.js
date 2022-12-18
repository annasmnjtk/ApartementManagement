import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import fetchAPI from "../API/unit-api-config";

export const saveUnit = createAsyncThunk("unit/saveUnit", async (unit) => {
  unit.id = nanoid();
  const unitData = await fetchAPI("units", "POST", true, unit);

  return unitData;
});

export const updateUnit = createAsyncThunk("unit/updateUnit", async (unit) => {
  const unitData = await fetchAPI(`units/${unit.id}`, "PUT", true, unit);

  return unitData;
});

export const getAllUnit = createAsyncThunk("unit/getAllUnit", async () => {
  const unitData = await fetchAPI("units", "GET", true);
  return unitData;
});

export const deleteUnit = createAsyncThunk("unit/deleteUnits", async (id) => {
  const unitData = await fetchAPI(`units/${id}`, "DELETE", true);
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
    SELECT_UNITS: (state, action) => {
      state.selectedUnit = state.units.find(
        (unit) => unit.id === action.payload
      );
      console.log("select", action.payload);
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

const { SET_UNITS, SELECT_UNITS } = unitSlice.actions;

export default unitSlice;

export { SET_UNITS, SELECT_UNITS };
