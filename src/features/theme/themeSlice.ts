import { createSlice } from "@reduxjs/toolkit"

// import { fetchCount } from "./counterAPI"

export interface ThemeState {
  mode: string
}

const initialState: ThemeState = {
  mode: "light",
}

export const ThemeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
  },
})

export const { setMode } = ThemeSlice.actions
export default ThemeSlice.reducer
