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
                <h1><Link to="/"><img src="/logo.svg" alt="logo"/>Notify</Link></h1>
                <Link to="/profile"><div className="foto-perfil"></div></Link>
            </header>

            <div className="barra-pesquisa">
                <input type="text" id="pesquisa" placeholder="Pesquisar"/>
            </div>
        </>
    )
}