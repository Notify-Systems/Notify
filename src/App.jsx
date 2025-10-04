import { Outlet } from "react-router-dom"
import { useContext } from "react";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}