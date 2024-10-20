import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operation';

const currencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {
    setBaseCurrency(state, { payload }) {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    }),
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
