import { Link } from "react-router-dom"

export default function AsideButton(nome, img, link) {
    return(
        <>
            <Link to={link}>
                <img src={img} alt={nome} />
                <h4 className="button-text">{nome}</h4>
            </Link>
        </>
    )
}