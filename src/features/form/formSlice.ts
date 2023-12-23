import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FormData {
  id: number
  nombre: string
  ci: string
  email: string
  cell: string
}

const initialState: FormData[] = [
  {
    id: 0,
    nombre: "",
    ci: "",
    email: "",
    cell: "",
  },
]

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<FormData>) => {
      state.push(action.payload)
    },
    resetFormData: (state) => {
      // Restablece el formulario al estado inicial
      state.length = 1
      state[0] = initialState[0]
    },
  },
})

export const { updateFormData, resetFormData } = formSlice.actions
export default formSlice.reducer
