import { createSlice } from '@reduxjs/toolkit';
import { createContact, getContacts } from '../actions';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loader: false,
    error: "",
  },
  extraReducers: {
    [createContact.pending]: (state) => {
      state.loader = true;
    },
    [createContact.rejected]: (state) => {
      state.loader = false;
      state.error = "Error";
    },
    [createContact.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = "";
      state.items = [...state.items, payload];
    },

    [getContacts.pending]: (state) => {
      state.loader = true;
    },
    [getContacts.rejected]: (state) => {
      state.loader = false;
      state.error = "Error";
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = "";
      state.items = [...payload];
    }
  }
});

export default contactSlice.reducer;