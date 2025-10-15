import { useParams, Link } from "react-router-dom"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Info from "../components/ui/Info"
import Materia from "../components/ui/Materia"
import Anotacao from "../components/ui/Anotacao"
import Tarefa from "../components/ui/Tarefa"

export default function Series() {
    const { id } = useParams();

    return (
        <>
            <main>
                <BarraPesquisa />
                <Info nome={"1o Ano Ensino Médio"} />
                <section id="materias" className="estudos-container">
                    <div className="container-title">
                        <h2>Máterias</h2>
                        <Link to="add/subject"><img src="/btnAdd.svg" alt="Adicionar Matéria"/></Link>
                    </div>
                    <Materia nome={"Matemática"} />
                </section>
                <section id="anotacoes" className="estudos-container">
                    <div className="container-title">
                        <h2>Anotações</h2>
                        <Link to="add/note"><img src="/btnAdd.svg" alt="Adicionar Anotação"/></Link>
                    </div>
                    <Anotacao nome={"Funções do 2o Grau"} materia={"Matemática"} />
                </section>
                <section id="tarefas" className="estudos-container">
                    <div className="container-title">
                        <h2>Tarefas</h2>
                        <Link to="add/task"><img src="/btnAdd.svg" alt="Adicionar Tarefa"/></Link>
                    </div>
                    <Tarefa nome={"Matemática"} materia={"Matemática"} prazo={"2025/10/18 - 07:00"} done={false} />
                </section>
            </main>
            <Aside />
        </>
    )
}