import { useContext } from "react"
import { GradesContext } from "../context/GradesContext"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Serie from "../components/ui/Serie"

export default function Estudos() {
    const { grades } = useContext(GradesContext);

    return (
        <>
            <main>
                <BarraPesquisa />
                <section id="series">
                    {Array.isArray(grades) && grades.map(grade => (
                        <Serie key={`serie${grade.id}`} nome={grade.title} id={grade.id} />
                    ))}
                </section>
            </main>
            <Aside select="Estudos" />
        </>
    )
}