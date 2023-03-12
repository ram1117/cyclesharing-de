import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { cities: [], status: 'loading', cityCapitals: [] };

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('http://api.citybik.es/v2/networks');
  return response.json();
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, { payload }) => {
      const newList = [];
      const newCapitals = [];
      payload.networks.forEach((network) => {
        if (network.location.country === 'DE') {
          newList.push({
            city: network.location.city,
            href: network.href,
            name: network.name,
            latitude: network.location.latitude,
            longitude: network.location.longitude,
            id: network.id,
          });
          const { city } = network.location;
          const firstLetter = city.charAt(0);
          if (newCapitals.indexOf(firstLetter) === -1) {
            newCapitals.push(firstLetter);
          }
        }
      });
      return {
        ...state,
        cities: [...newList],
        cityCapitals: [...newCapitals],
        status: 'completed',
      };
    });
  },
});

export default citiesSlice.reducer;
