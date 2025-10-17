import { useContext, useState } from "react"
import { GradesContext } from "../context/GradesContext"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Serie from "../components/ui/Serie"

export default function Estudos() {
    const { grades } = useContext(GradesContext);
    const [search, setSearch] = useState("");

    return (
        <>
            <main>
                <BarraPesquisa search={search} setSearch={setSearch} />
                <section id="series">
                    {Array.isArray(grades) && grades.map(grade => (
                        <Serie key={`serie${grade.id}`} nome={grade.title} id={grade.id} search={search} />
                    ))}
                </section>
            </main>
            <Aside select="Estudos" />
        </>
    )
}