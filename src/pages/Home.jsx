import { Link } from "react-router-dom"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Materia from "../components/ui/Materia"
import Anotacao from "../components/ui/Anotacao"

export default function Home() {
    return (
        <>
            <BarraPesquisa />
            <main>
                <section id="materias" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Máterias</h2>
                        <Link to="#"><img src="/btnAdd.svg" alt="Adicionar Matéria"/></Link>
                    </div>
                    <Materia />
                </section>
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Suas Anotações</h2>
                        <Link to="#"><img src="/btnAdd.svg" alt="Adicionar Anotação"/></Link>
                    </div>
                    <Anotacao />
                </section>
            </main>
            <Aside select="Menu" />
        </>
    )
}