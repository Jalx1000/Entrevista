import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  useTheme,
  TextField,
} from "@mui/material"
import { AmountApproved } from "../../features/form/formSlice"

function TarjetasSolicitadas() {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.form)
  const theme = useTheme()

  const handleAmountChange = (id: number, mount: number) => {
    dispatch(AmountApproved({ id, mount }))
  }

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Documento de Identidad</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Teléfono</TableCell>
              <TableCell>Monto Aprobado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((data) => {
              if (data.check === 1) {
                return (
                  <TableRow key={data.id}>
                    <TableCell>{data.nombre}</TableCell>
                    <TableCell>{data.ci}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.cell}</TableCell>
                    <TableCell>
                      {/* Utiliza TextField para el input */}
                      <TextField
                        value={data.mount ?? 0}
                        onChange={(e) => {
                          const newMountValue = parseFloat(e.target.value) || 0
                          handleAmountChange(data.id, newMountValue)
                        }}
                      />
                    </TableCell>
                  </TableRow>
                )
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TarjetasSolicitadas
