import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './components/UI/RootLayout'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'
import Themes from './pages/Themes'
import { useThemeStore } from './stores/useThemeStore'
import Error from './pages/Error'

function App() {
  const {theme} = useThemeStore();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <Error/>,
      children: [
        {index: true, element: <Home/>},
        {path: 'about', element: <About/>},
        {path: 'portfolio', element: <Portfolio/>},
        {path: 'portfolio/:slug', element: <ProjectDetails/>},
        {path: 'contact', element: <Contact/> },
        {path: 'themes', element: <Themes/>}
      ]
    }
  ])
  
  return (
    <div data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
