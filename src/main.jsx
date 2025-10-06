import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppProviders } from './context/AppProviders.jsx'
import App from './App.jsx'
import Home from './pages/Home'
import Add from './pages/Add'
import Edit from './pages/Edit'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/add/:info", element: <Add />},
      {path: "/edit", element: <Edit />}
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