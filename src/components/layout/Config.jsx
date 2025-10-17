import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export default function Config() {
    const { theme } = useContext(ThemeContext)

    return(
        <>
        <section>
            <button className="btn-fechar"><img src={`${import.meta.env.BASE_URL}/btnAdd.svg`} alt="Fechar aba" />Fechar</button>
            <button className="open-theme">Tema: </button>
            <div className="sel-theme">
                <button className="btn-theme">Automático</button>
                <button className="btn-theme">Modo Claro</button>
                <button className="btn-theme">Modo Escuro</button>
            </div>
        </section>
        </>
    )
}