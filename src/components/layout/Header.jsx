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
                <h1><Link to="/"><img src="/logo.svg" alt="logo"/></Link></h1>
                <Link to="/profile"><div className="foto-perfil"></div></Link>
            </header>

            <div className="barra-pesquisa">
                <input type="text" className="pesquisa-input" />
            </div>

            <main>
                <div className="tarefa">
                    <h1 className="titulo">Suas matérias</h1>
                    <button>+</button>
                    <div className="tarea-itens">
                        <h1 className="titulo-item">Matemática</h1>
                        <h3 className="subtitulo">1° Ano ensino médio</h3>
                    </div>
                </div>

                <div className="tarefa">
                    <h1 className="titulo">Suas anotações</h1>
                    <button>+</button>
                    <div className="tarea-itens">
                        <h1 className="titulo-item">Funções de 2° grau</h1>
                        <h3 className="subtitulo">matemática</h3>
                    </div>
                </div>
            </main>
        </>
    )
}