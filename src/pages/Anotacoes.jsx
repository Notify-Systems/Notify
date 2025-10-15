import { useParams } from "react-router-dom"
import Aside from "../components/layout/Aside"
import BarraPesquisa from "../components/layout/BarraPesquisa"
import Info from "../components/ui/Info"

export default function Anotacoes() {
    const { id } = useParams();

    return (
        <>
            <main>
                <BarraPesquisa />
                <Info />
                <textarea className="show-note" readOnly></textarea>
            </main>
            <Aside />
        </>
    )
}