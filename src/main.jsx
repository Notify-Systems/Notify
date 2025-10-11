import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppProviders } from './context/AppProviders.jsx'
import App from './App.jsx'
import Home from './pages/Home'
import Estudos from './pages/Estudos'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Cronograma from "./pages/Cronograma"
import Perfil from "./pages/Perfil"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/estudos", element: <Estudos />},
      {path: "/add/:info", element: <Add />},
      {path: "/edit/:info", element: <Edit />},
      {path: "/cronograma", element: <Cronograma />},
      {path: "/perfil", element: <Perfil />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>
)