import { useState, useEffect, useContext } from "react"
import { GradesContext } from "../context/GradesContext"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Serie from "../components/ui/Serie"

export default function Estudos() {
    const { grades } = useContext(GradesContext);
    const [gradeList, setGrades] = useState([]);

    useEffect(() => {
        const newGrades = grades.map(grade => (
            <Serie key={`serie${grade.id}`} nome={grade.title} />
        ));
        setGrades(newGrades);
    }, [grades]);

    return (
        <>
            <main>
                <BarraPesquisa />
                <section id="series">
                    {gradeList}
                </section>
            </main>
            <Aside select="Estudos" />
        </>
    )
}