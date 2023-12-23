import React, { useMemo } from "react"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { Rutas } from "./routes/Rutas"
import { themeSettings } from "./features/theme/theme"
import { useSelector } from "react-redux"

const App = () => {
  const mode = useSelector((state) => state.theme.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Rutas />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
