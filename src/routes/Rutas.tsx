import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../features/layout/Layout"
import CreateProduct from "../pages/createProduct/CreateProduct"

export const Rutas = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/productList" replace />} />
        <Route path="/createProduct" element={<CreateProduct />} />
      </Route>
    </Routes>
  )
}
