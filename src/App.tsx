

import { Route, Routes } from 'react-router-dom'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'

function App() {


  return (
    <>
    <main>
      <Routes>
        <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={<SigninForm/>}/>
            <Route path='/sign-up' element={<SignupForm/>}/>
        </Route>
      </Routes>
    </main>
     
    </>
  )
}

export default App
