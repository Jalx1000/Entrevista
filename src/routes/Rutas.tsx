import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import SolicitudTarjetas from "../pages/solicutudTarjetas/SolicitudTarjetas"
import TarjetasAprobadas from "../pages/tarjetasAprovadas/TarjetasAprobadas"
import TarjetasSolicitadas from "../pages/TarjetasSolicitadas/TarjetasSolicitadas"

export const Rutas = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/solicitud" replace />} />
        <Route path="/solicitud" element={<SolicitudTarjetas />} />
        <Route path="/solicitadas" element={<TarjetasSolicitadas />} />
        <Route path="/aprobadas" element={<TarjetasAprobadas />} />
      </Route>
    </Routes>
  )
}
