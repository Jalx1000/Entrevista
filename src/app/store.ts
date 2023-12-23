import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import ThemeReducer from "../features/theme/themeSlice"
import formSlice from "../features/form/formSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: ThemeReducer,
    form: formSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
