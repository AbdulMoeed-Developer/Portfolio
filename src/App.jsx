import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './components/UI/RootLayout'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {index: true, element: <Home/>},
        {path: 'about', element: <About/>},
        {path: 'portfolio', element: <Portfolio/>},
        {path: 'portfolio/:slug', element: <ProjectDetails/>},
        {path: 'contact', element: <Contact/> }
      ]
    }
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
