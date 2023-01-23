import { useState } from 'react'
import { defaultTheme } from './styles/Themes/defaultTheme'
import { ThemeProvider } from 'styled-components'
import { SingUp } from './pages/Login'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />

      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
