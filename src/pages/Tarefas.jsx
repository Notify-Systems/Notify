import { useParams } from "react-router-dom"
import Aside from "../components/layout/Aside"
import Info from "../components/ui/Info"

export default function Tarefas() {
    const { id } = useParams();

    return (
        <>
            <main>
                <Info nome={"Lição de Casa"} />
                <section className="status-tarefa">
                    <h2>Status:</h2>
                    <h3>Pendente</h3>
                    <h2>Data Limite:</h2>
                    <h3>2025/10/18 - 07:00</h3>
                    <p>Faltam 4 dias para a data limite</p>
                </section>
            </main>
            <Aside />
        </>
    )
}