import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as TransaksiAPI from "../API/transaksi-api";

export const fetchTransaksi = createAsyncThunk("transaksi/fetch", async () => {
  const dataTransaksi = await TransaksiAPI.getAllTransaksi();
  return dataTransaksi;
});

export const saveTransaksi = createAsyncThunk(
  "transaksi/save",
  async (transaksi) => {
    const dataTransaksi = await TransaksiAPI.createTransaksi(transaksi);
    return dataTransaksi;
  }
);
export const updateTransaksi = createAsyncThunk(
  "transaksi/update",
  async (transaksi) => {
    const dataTransaksi = await TransaksiAPI.updateTransaksi(transaksi);
    return dataTransaksi;
  }
);

export const deleteTransaksi = createAsyncThunk(
  "transaksi/delete",
  async (id) => {
    await TransaksiAPI.deleteTransaksi(id);
  }
);
export const transaksiSlice = createSlice({
  name: "transaksi",
  initialState: {
    transaksi: [],
    error: undefined,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransaksi.fulfilled, (state, action) => {
        state.transaksi = action.payload;
      })
      .addCase(fetchTransaksi.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(saveTransaksi.fulfilled, (state, action) => {
        state.transaksi.push(action.payload);
      })
      .addCase(saveTransaksi.rejected, (state, action) => {
        console.log(action.payload);
        state.error = action.error.message;
      })
      .addCase(updateTransaksi.fulfilled, (state, action) => {
        state.transaksi = state.transaksi.map((resident) => {
          if (resident.id === action.payload.id) {
            resident = action.payload;
          }
          return resident;
        });
      })
      .addCase(updateTransaksi.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
