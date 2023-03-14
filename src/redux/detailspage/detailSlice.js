import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = { detail: { stations: [] }, status: 'loading' };

export const fetchDetails = createAsyncThunk(
  'detail/fetchDetail',
  async (id) => {
    const response = await fetch(`http://api.citybik.es/v2/networks/${id}`);
    return response.json();
  },
);

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDetails.fulfilled, (state, { payload }) => {
      const arr = payload.network.stations.slice(0, 16);
      const dataObj = {
        name: payload.network.name,
        city: payload.network.location.city,
        country: payload.network.location.country,
        company: payload.network.company,
        stations: arr,
      };
      return { ...state, detail: dataObj };
    });
  },
});

export default detailSlice.reducer;
