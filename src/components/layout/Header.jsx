import { useContext } from "react"
import { Link } from "react-router-dom"
import { ConfigContext } from "../../context/ConfigContext"

export default function Header() {
    const { toggleOpen } = useContext(ConfigContext)

    function openConfig() {
        toggleOpen()
    }

    return (
        <>
            <header>
                <div className="btn-menu" onClick={openConfig}>
                    <span></span>
                    <span></span>
                    <span></span>   
                </div>
                <h1><Link to="/"><img src={`${import.meta.env.BASE_URL}/logo.svg`} alt="logo"/>Notify</Link></h1>
                <Link to="/perfil"><img className="foto-perfil" src={`${import.meta.env.BASE_URL}/profile.svg`} /></Link>
            </header>
        </>
    )
}