import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import RootLayout from './components/UI/RootLayout.jsx'
import About from './pages/About.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import Contact from './pages/Contact.jsx'
import Themes from './pages/Themes.jsx'
import { useThemeStore } from './stores/useThemeStore.js'
import Error from './pages/Error.jsx'

function App() {
  const { theme } = useThemeStore()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'portfolio/:slug', element: <ProjectDetails /> },
        { path: 'contact', element: <Contact /> },
        { path: 'themes', element: <Themes /> },
      ]
    },
    { path: '*', element: <Error /> }
  ])

  return (
    <div data-theme={theme}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App