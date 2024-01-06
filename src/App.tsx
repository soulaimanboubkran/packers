

import { Route, Routes } from 'react-router-dom'
import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Toaster } from './components/ui/toaster'

function App() {


  return (
    <>
    <main className='flex h-screen'>
      <Routes>
        <Route element={<AuthLayout/>}>
            <Route path='/sign-in' element={<SigninForm/>}/>
            <Route path='/sign-up' element={<SignupForm/>}/>
        </Route>

     <Route element={<AuthLayout/>}>
        
        </Route> 
      </Routes>
      <Toaster/>
    </main>
     
    </>
  )
}

export default App
