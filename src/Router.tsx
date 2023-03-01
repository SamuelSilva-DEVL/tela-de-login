import { Fragment, ReactNode } from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import { HomePage } from './pages/Home'
import { SignIn } from './pages/SignIn'
import useAuth from './hooks/useAuth'

const Private = () => {
   const { signed } = useAuth();
   const navigate = useNavigate()

   return signed > 0 ? <HomePage /> : <SignIn />
}

export function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<SignIn />}/>
          <Route path='/register' element={<SignUp />}/>
          <Route path='/home' element={<Private />}/>

          <Route path='*' element={<SignIn />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}