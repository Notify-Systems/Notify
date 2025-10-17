import { useContext, useState } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { ConfigContext } from "../../context/ConfigContext"

export default function Config() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { config, toggleOpen } = useContext(ConfigContext)
    const [sel, setSel] = useState("closed");

    function closeConfig() {
        toggleOpen();
    }

    function toggleSel() {
        setSel(`${sel === "open" ? "closed" : "open"}`);
    }
    
    function selTheme(themeSel) {
        switch(themeSel) {
            case "light":
                if(theme !== "light")
                    toggleTheme()
                break
            case "dark":
                if(theme !== "dark")
                    toggleTheme()
                break
            default:
                if(theme !== "light")
                    toggleTheme()
                break
        }
        toggleSel()
    }
 
    return(
        <>
        <section className={`config ${config === "open" ? "open" : ""}`}>
            <button className="btn-fechar" onClick={closeConfig}><img src={`${import.meta.env.BASE_URL}/btnAdd${theme === "dark" ? "Dark" : ""}.svg`} alt="Fechar aba" />Fechar</button>
            <button className={`open-theme ${sel === "open" ? "open" : ""}`} onClick={toggleSel}><span>Tema:</span> <img src={`${import.meta.env.BASE_URL}/arrow${theme === "dark" ? "Dark" : ""}.svg`} /></button>
            <div className={`sel-theme ${sel === "open" ? "open" : ""}`}>
                <button className="btn-theme" onClick={() => selTheme("auto")}>Automático</button>
                <button className="btn-theme" onClick={() => selTheme("light")}>Modo Claro</button>
                <button className="btn-theme" onClick={() => selTheme("dark")}>Modo Escuro</button>
            </div>
        </section>
        </>
    )
}