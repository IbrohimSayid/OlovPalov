import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout/Index';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignUp from './Pages/SignUp/SignUp';
import LogIn from './Pages/SignIn/SignIn';
import Products from './Pages/Products/Products';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />

        <Route path='/' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sidebar' element={<Sidebar />} />
        </Route>
      </>
    ))

  return <RouterProvider router={router} />
}

export default App
