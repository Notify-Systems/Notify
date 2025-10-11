export default function MateriaPerfil() {
    const materia = {
        nome: "Matemática",
        serie: "1o Ano Ensino Médio"
    }

    return (
        <>
             <div className="materia">
                <h1>{materia.nome}</h1>
                <h4>{materia.serie}</h4>
            </div>
        </>
    )
}