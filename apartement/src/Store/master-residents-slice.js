import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import * as ResidentAPI from "../API/api-config";

export const fetchResidents = createAsyncThunk(
  "resident/fetchResident",
  async () => {
    const residents = await ResidentAPI.getAllResidents();
    return residents;
  }
);

export const saveResident = createAsyncThunk(
  "resident/saveResident",
  async (resident) => {
    const residentData = await ResidentAPI.createResident(resident);

    return residentData;
  }
);

export const updateResident = createAsyncThunk(
  "resident/updateResident",
  async (resident) => {
    const residentData = await ResidentAPI.updateResident(resident);
    console.log("ini", resident);
    return residentData;
  }
);

export const deleteResident = createAsyncThunk(
  "resident/deleteResident",
  async (id) => {
    await ResidentAPI.deleteResident(id);
  }
);

const residentSlice = createSlice({
  name: "resident",
  initialState: {
    residents: [],
    error: undefined,
  },
  reducers: {
    loadResidents: (state, action) => {
      state.residents = action.payload;
    },
    save: (state, action) => {
      state.residents.push(action.payload);
    },
    update: (state, action) => {
      state.residents = state.residents.map((resident) => {
        if (resident.id === action.payload.id) {
          resident = action.payload;
        }
        return resident;
      });
    },
    selectResident: (state, action) => {
      state.selectedResident = state.residents.find(
        (resident) => resident.id === action.payload
      );
    },
    unselectResident: (state, action) => {
      state.selectedResident = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchResidents.fulfilled, (state, action) => {
        state.residents = action.payload;
      })
      .addCase(fetchResidents.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(saveResident.fulfilled, (state, action) => {
        state.residents.push(action.payload);
      })
      .addCase(saveResident.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateResident.fulfilled, (state, action) => {
        state.residents = state.residents.map((resident) => {
          if (resident.id === action.payload.id) {
            resident = action.payload;
          }
          return resident;
        });
      })
      .addCase(updateResident.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

const { loadResidents, save, update, selectResident, unselectResident } =
  residentSlice.actions;

export default residentSlice;
export { loadResidents, save, update, selectResident, unselectResident };
