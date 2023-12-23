import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FormData {
  nombre: string
  documentoIdentidad: string
  correo: string
  telefono: string
}

interface FormState {
  formData: FormData
}

const initialState: FormState = {
  formData: {
    nombre: "",
    documentoIdentidad: "",
    correo: "",
    telefono: "",
  },
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<FormData>) => {
      state.formData = action.payload
    },
    resetFormData: (state) => {
      state.formData = initialState.formData
    },
  },
})

export const { updateFormData, resetFormData } = formSlice.actions
export default formSlice.reducer
