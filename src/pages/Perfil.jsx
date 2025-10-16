import { useContext } from "react"
import { GradesContext } from "../context/GradesContext"
import { SubjectContext } from "../context/SubjectContext"
import { NotesContext } from "../context/NotesContext"
import Aside from "../components/layout/Aside"
import MateriaPerfil from "../components/ui/MateriaPerfil"
import "../perfil.css"

export default function Perfil() {
    const { returnGrade } = useContext(GradesContext);
    const { subjects } = useContext(SubjectContext);
    const { notes } = useContext(NotesContext);

    return (
        <>
            <main className="perfil">
                <section className="usuario-container">
                    <div id="usuarioImg"><img src={`${import.meta.env.BASE_URL}/profile.svg`} alt="foto perfil" /></div>
                    <div className="usuario-info">
                        <h3 id="nomeUsuario">Nome do Usuário</h3>
                        <h4 id="numMaterias">{subjects.length === 1 ? `${subjects.length} matéria` : `${subjects.length} matérias`}</h4>
                        <h4 id="numAnotacoes">{notes.length === 1 ? `${notes.length} anotação` : `${notes.length} anotações`}</h4>
                    </div>
                </section>
                <section className="materias-container">
                    <h2>Matérias</h2>
                    <div className="materias">
                        {Array.isArray(subjects) && subjects.map(subject => (
                            <MateriaPerfil
                                key={`materia${subject.id}`}
                                nome={subject.title}
                                serie={returnGrade(subject.grade) != null ? returnGrade(subject.grade).title : ""}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Aside select="Perfil" />
        </>
    )
}