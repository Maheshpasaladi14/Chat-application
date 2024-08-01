// eslint-disable-next-line no-unused-vars
import React from 'react'

import Home from './Pages/Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import SignIn from './Pages/Signup/SignIn'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/AuthContext'




const App = () => {
  const {auth}=useAuthContext();
  return (
    <div className=' p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={auth ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={auth ? <Navigate to='/' /> : <Login />} />
        <Route path='/signUp' element={auth ? <Navigate to='/' /> : <SignIn />} />
      </Routes>
     <Toaster/>
    </div>
  )
}

export default App