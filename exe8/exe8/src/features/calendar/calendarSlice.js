import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMonthData = createAsyncThunk(
  "calendar/fetchMonthData",
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);

      const formattedStart = startDate.toLocaleDateString("en-CA");
      const formattedEnd = endDate.toLocaleDateString("en-CA");

      const response = await axios.get(
        `https://www.hebcal.com/converter?cfg=json&start=${formattedStart}&end=${formattedEnd}&g2h=1`,
      );
      return response.data.hdates;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    monthData: {},
    status: "idle",
    error: null,
  },
  reducers: {
    addEvent: (state, action) => {
      const { date, eventText } = action.payload;
      if (state.monthData[date]) {
        state.monthData[date].events.push(eventText);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMonthData.fulfilled, (state, action) => {
        state.monthData = action.payload;
      })
      .addCase(fetchMonthData.rejected, (state, action) => {
        alert("שגיאה בטעינת נתונים: " + action.payload);
      });
  },
});

export const { addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
