import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

function TarjetasSolicitadas() {
  // Accede al estado de Redux para obtener los datos del formulario
  const formData = useSelector((state: RootState) => state.form.formData)

  // Renderiza los datos en el componente
  return (
    <div>
      <h2>Datos del Formulario:</h2>
      <p>Nombre: {formData.nombre}</p>
      <p>Documento de Identidad: {formData.documentoIdentidad}</p>
      <p>Correo: {formData.correo}</p>
      <p>Teléfono: {formData.telefono}</p>
    </div>
  )
}

export default TarjetasSolicitadas
