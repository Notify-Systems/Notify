import { Link } from "react-router-dom"

export default function Info({ type, nome, id }) {
    return (
        <section className="info-container">
            <h2>{nome}</h2>
            <div className="info-buttons">
                <Link to={`/edit/${type}/${id}`}>
                    <div className="info-btn">
                        <span>Editar</span>
                    </div>
                </Link>
                <button className="info-btn">Excluir</button>
            </div>
        </section>
    )
}