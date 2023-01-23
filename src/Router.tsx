import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Registrar } from './pages/CadastrarSe'
import { HomePage } from './pages/Home'
import { SingUp } from './pages/Login'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SingUp />}/>
        <Route path='/register' element={<Registrar />}/>
        <Route path='/home' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}