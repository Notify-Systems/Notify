import { Link } from "react-router-dom"
import Nome from "../components/ui/Nome"
import Botoes from "../components/ui/Botoes"

export default function Add() {
    return (
        <>
            <h2>Adicionar:</h2>
            <h2>Nome:</h2>
            <Link to={Nome}></Link>
            <Link to={Botoes}></Link>
        </>
    )
}