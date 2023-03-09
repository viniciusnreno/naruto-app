import React from 'react'
import ReactDOM from 'react-dom/client'
import '././style/global.css'
import { App } from './App'
import { Home } from './pages/Home'
import { CharacterInformations } from './pages/CharacterInformations'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/details/:name",
//     element: <CharacterInformations />,
//   }  
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/details/:name",
    element: <CharacterInformations />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
