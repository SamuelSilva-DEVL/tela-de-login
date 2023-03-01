import { defaultTheme } from './styles/Themes/defaultTheme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />

        <GlobalStyle/>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
