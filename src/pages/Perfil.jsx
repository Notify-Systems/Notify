import BarraPesquisa from "../components/layout/BarraPesquisa"
import Aside from "../components/layout/Aside"
import MateriaPerfil from "../components/ui/MateriaPerfil"

export default function Perfil() {
    return (
        <>
            <BarraPesquisa />
            <main>
                <section id="usuario-cotainer">
                    <div id="usuario-img"><img src="/profile.svg" alt="foto perfil" /></div>
                    <div id="usuario-info">
                        <h1>Nome do usuario</h1>
                        <h4>num de materias</h4>
                        <h4>num de anotações</h4>
                    </div>
                </section>
                <section id="materias-container">
                    <MateriaPerfil />
                </section>
            </main>
            <Aside select="Perfil" />
        </>
    )
}