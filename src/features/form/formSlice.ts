import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FormData {
  id: number
  nombre: string
  ci: string
  email: string
  cell: string
  check?: number
}

const initialState: FormData[] = [
  {
    id: 0,
    nombre: "",
    ci: "",
    email: "",
    cell: "",
    check: 0,
  },
]

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addApplication: (state, action: PayloadAction<FormData>) => {
      state.push(action.payload)
    },
    resetFormData: (state) => {
      // Restablece el formulario al estado inicial
      state.length = 1
      state[0] = initialState[0]
    },
    approveApplication: (
      state,
      action: PayloadAction<{ id: number; check: boolean }>,
    ) => {
      const { id, check } = action.payload
      const index = state.findIndex((data) => data.id === id)
      console.log(index, check ? 1 : -1)
      if (index !== -1) {
        state[index].check = check ? 1 : -1
      }
    },
  },
})

export const { approveApplication, addApplication, resetFormData } =
  formSlice.actions
export default formSlice.reducer
