import { Link } from "react-router-dom"

export default function AsideButton({ nome, img, link, select }) {
    return(
        <>
            <Link to={link}>
                <img src={`/${img}${select === true ? "Select" : ""}.svg`} alt={nome} />
                <h4 className="button-text">{nome}</h4>
            </Link>
        </>
    )
}