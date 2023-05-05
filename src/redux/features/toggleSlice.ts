import { createSlice } from '@reduxjs/toolkit';

interface ToggleState {
  clicked: boolean;
}

const initialState: ToggleState = {
  clicked: false,
};

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    hamburgerClicked: (state) => {
      state.clicked = !state.clicked;
    },
  },
});

export const { hamburgerClicked } = toggleSlice.actions;
export default toggleSlice.reducer;
