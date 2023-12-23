import React, { useEffect, useState } from "react"
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
import { v4 as uuid } from "uuid"

function SolicitudTarjetas() {
  const dispatch = useAppDispatch()
  const formData = useAppSelector((state: RootState) => state.form)

  const [task, setTask] = useState({
    nombre: "",
    ci: "",
    email: "",
    cell: "",
  })

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
    console.log(task)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    dispatch(updateFormData({ ...task, id: uuid() }))
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
                value={task.nombre}
                name="nombre"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Documento de Identidad"
                variant="outlined"
                name="ci"
                value={task.ci}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Correo"
                type="email"
                name="email"
                variant="outlined"
                value={task.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Teléfono"
                type="number"
                name="cell"
                variant="outlined"
                value={task.cell}
                onChange={handleChange}
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
