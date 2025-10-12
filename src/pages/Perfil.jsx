import Aside from "../components/layout/Aside"
import MateriaPerfil from "../components/ui/MateriaPerfil"
import "../perfil.css"

export default function Perfil() {
    return (
        <>
            <main className="perfil">
                <section className="usuario-container">
                    <div id="usuarioImg"><img src="/profile.svg" alt="foto perfil" /></div>
                    <div className="usuario-info">
                        <h3 id="nomeUsuario">Nome do Usuário</h3>
                        <h4 id="numMaterias">num de matérias</h4>
                        <h4 id="numAnotacoes">num de anotações</h4>
                    </div>
                </section>
                <section className="materias-container">
                    <h2>Matérias</h2>
                    <div className="materias">
                        <MateriaPerfil />
                    </div>
                </section>
            </main>
            <Aside select="Perfil" />
        </>
    )
}