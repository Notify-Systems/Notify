import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { AppProviders } from './context/AppProviders.jsx'
import App from './App.jsx'
import Home from './pages/Home'
import Estudos from './pages/Estudos'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Cronograma from "./pages/Cronograma"
import Perfil from "./pages/Perfil"
import Series from "./pages/Series"
import Materias from "./pages/Materias"
import Anotacoes from "./pages/Anotacoes"
import Tarefas from "./pages/Tarefas"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="estudos" element={<Estudos />} />
            <Route path="add/:info" element={<Add />} />
            <Route path="edit/:info/:id" element={<Edit />} />
            <Route path="cronograma" element={<Cronograma />} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="serie/:id" element={<Series />} />
            <Route path="materia/:id" element={<Materias />} />
            <Route path="anotacao/:id" element={<Anotacoes />} />
            <Route path="tarefa/:id" element={<Tarefas />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProviders>
  </React.StrictMode>
)