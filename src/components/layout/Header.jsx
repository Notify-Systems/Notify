import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                <div className="btn-menu">
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