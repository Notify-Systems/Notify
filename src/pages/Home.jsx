import { Link } from "react-router-dom"
import Header from "../components/layout/Header"
import Materia from "../components/ui/Materia"
import Anotacao from "../components/ui/Anotacao"

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section id="materias" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Máterias</h2>
                        <Link to="/add"><img src="/btnAdd.svg" alt="Adicionar Matéria"/></Link>
                    </div>
                </section>
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Anotações</h2>
                        <Link to="/add"><img src="/btnAdd.svg" alt="Adicionar Anotação"/></Link>
                    </div>
                </section>
            </main>
        </>
    )
}