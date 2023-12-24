// En TarjetasSolicitadas.tsx
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
} from "@mui/material"
import { approveApplication } from "../../features/form/formSlice"

function TarjetasSolicitadas() {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootState) => state.form)
  const theme = useTheme()

  const handleApprove = (id: number, check: boolean) => {
    dispatch(approveApplication({ id, check }))
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
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.nombre}</TableCell>
                <TableCell>{data.ci}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.cell}</TableCell>
                <TableCell>
                  <Button
                    sx={{ color: theme.palette.secondary[100] }}
                    onClick={() => handleApprove(data.id, true)}
                  >
                    Aprobar
                  </Button>
                  <Button
                    sx={{ color: theme.palette.secondary[100] }}
                    onClick={() => handleApprove(data.id, false)}
                  >
                    Denegar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TarjetasSolicitadas
