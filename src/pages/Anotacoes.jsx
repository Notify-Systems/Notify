import { useParams } from "react-router-dom"
import Aside from "../components/layout/Aside"
import Info from "../components/ui/Info"

export default function Anotacoes() {
    const { id } = useParams();

    return (
        <>
            <main>
                <Info nome="Funções do 2o Grau" />
                <textarea className="show-note" readOnly value={"teste"}></textarea>
            </main>
            <Aside />
        </>
    )
}