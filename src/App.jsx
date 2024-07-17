
import './App.css'
import Img from './Componants/ImgComponant/Img'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Componants/Home/Home'
import Layout from './Componants/Layout/Layout'
import About from './Componants/About/About'
import Experiance from './Componants/Experiance/Experiance'
import Skills from './Componants/Skills/Skills'
import Work from './Componants/Work/Work'
import SideNav from './Componants/SideNav/SideNav'
import NotFound from './Componants/NotFound/NotFound'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound/>,
      children: [
        {index: true, element:<Home/>},
        {path: "home", element:<Home/>},
        {path: "about", element:<About/>},
        {path: "experiance", element:<Experiance/>},
        {path: "skills", element:<Skills/>},
        {path: "work", element:<Work/>},

      ],
    },
    
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
    
  )
}

export default App
