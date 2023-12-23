import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { Box } from "@mui/material"

function TarjetasSolicitadas() {
  // Accede al estado de Redux para obtener los datos del formulario
  const formData = useSelector((state: RootState) => state.form)

  // Renderiza los datos en el componente
  return (
    <Box>
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {formData.map((data) => (
          <div key={data.id} style={{ margin: "0 2.3rem" }}>
            <p>Nombre: {data.nombre}</p>
            <p>Documento de Identidad: {data.ci}</p>
            <p>Correo: {data.email}</p>
            <p>Teléfono: {data.cell}</p>
          </div>
        ))}
      </div>
    </Box>
  )
}

export default TarjetasSolicitadas
