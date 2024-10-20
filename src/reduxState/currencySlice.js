import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {
    setBaseCurrency(state, { payload }) {
      state.baseCurrency = payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
