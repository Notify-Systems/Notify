export default function MateriaPerfil() {
    const materia = {
        nome: "Matemática",
        serie: "1o Ano Ensino Médio"
    }

    return (
        <div className="materia-perfil">
            <h3>{materia.nome}</h3>
            <h4>{materia.serie}</h4>
        </div>
    )
}