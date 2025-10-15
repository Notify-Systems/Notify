import { useParams, Link } from "react-router-dom"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Info from "../components/ui/Info"
import Anotacao from "../components/ui/Anotacao"
import Tarefa from "../components/ui/Tarefa"

export default function Materias() {
    const { id } = useParams();

    return(
        <>
            <main>
                <BarraPesquisa />
                <Info nome={"Matemática"} />
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Anotações</h2>
                        <Link to="add/note"><img src="/btnAdd.svg" alt="Adicionar Anotação"/></Link>
                    </div>
                    <Anotacao nome={"Funções do 2o Grau"} />
                </section>
                <section id="tarefas" className="estudos-container">
                    <div className="container-title">
                        <h2>Tarefas</h2>
                        <Link to="add/task"><img src="/btnAdd.svg" alt="Adicionar Tarefa"/></Link>
                    </div>
                    <Tarefa nome={"Matemática"} prazo={"2025/10/18 - 07:00"} done={false} />
                </section>
            </main>
            <Aside />
        </>
    )
}