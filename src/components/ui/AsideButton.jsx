import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/ThemeContext"

export default function AsideButton({ nome, img, link, select }) {
    const { theme } = useContext(ThemeContext)

    return(
        <>
            <Link to={link}>
                <img src={`${import.meta.env.BASE_URL}/${img}${select === true ? "Select" : ""}${theme === "dark" ? "Dark" : ""}.svg`} alt={nome} />
                <h4 className="button-text">{nome}</h4>
            </Link>
        </>
    )
}