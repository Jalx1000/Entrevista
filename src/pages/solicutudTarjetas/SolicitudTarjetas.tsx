import React from "react"
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Container,
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { resetFormData, updateFormData } from "../../features/form/formSlice"
import { RootState } from "../../app/store"

function SolicitudTarjetas() {
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state: RootState) => state.form.formData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof typeof formData,
  ) => {
    dispatch(updateFormData({ ...formData, [fieldName]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    dispatch(resetFormData())
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Ingresar Datos
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                variant="outlined"
                value={formData.nombre}
                onChange={(e) => handleChange(e, "nombre")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Documento de Identidad"
                variant="outlined"
                value={formData.documentoIdentidad}
                onChange={(e) => handleChange(e, "documentoIdentidad")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Correo"
                type="email"
                variant="outlined"
                value={formData.correo}
                onChange={(e) => handleChange(e, "correo")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Teléfono"
                variant="outlined"
                value={formData.telefono}
                onChange={(e) => handleChange(e, "telefono")}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar
          </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default SolicitudTarjetas
