export default function MateriaPerfil({ nome, serie }) {
    return (
        <div className="materia-perfil">
            <h3>{nome}</h3>
            <h4>{serie}</h4>
        </div>
    )
}