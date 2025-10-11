import BarraPesquisa from "../components/layout/BarraPesquisa"
import Aside from "../components/layout/Aside"
import Tarefa from "../components/ui/Tarefa"

export default function Cronograma() {
    return (
        <>
            <BarraPesquisa />
            <main>
                <section id="pendentes" className="estudos-container">
                    <h2>Tarefas Pendentes</h2>
                    <Tarefa />
                </section>
                <section id="atraso" className="estudos-container">
                    <h2>Em atraso</h2>
                    <Tarefa />
                </section>
            </main>
            <Aside select="Cronograma" />
            
        </>
    )
}