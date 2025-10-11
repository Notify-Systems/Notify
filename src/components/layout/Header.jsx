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
                <Link to="/perfil"><div className="foto-perfil"></div></Link>
            </header>
        </>
    )
}