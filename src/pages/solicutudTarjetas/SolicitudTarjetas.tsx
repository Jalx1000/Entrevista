import React, { useState } from "react"
import { TextField, Button, Grid, Typography, Box } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addApplication } from "../../features/form/formSlice"
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
    dispatch(addApplication({ ...task, id: uuid(), check: 0 }))
  }
  return (
    <Box m="1.5rem 2.5rem" maxWidth="md">
      <Typography component="h1" variant="h5">
        INGRESAR DATOS
      </Typography>
      <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Nombre"
              variant="outlined"
              value={task.nombre}
              name="nombre"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Documento de Identidad"
              variant="outlined"
              name="ci"
              value={task.ci}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
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
          <Grid item xs={6}>
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
    </Box>
  )
}

export default SolicitudTarjetas
