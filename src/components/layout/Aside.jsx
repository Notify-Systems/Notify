import AsideButton from "../ui/AsideButton"

export default function Aside() {
    return (
        <>
            <aside>
                <AsideButton nome="Menu" img="/home.svg" link="/" />
                <AsideButton nome="Estudos" img="/estudos.svg" link="/" />
                <AsideButton nome="Adicionar" img="/add.svg" link="/" />
                <AsideButton nome="Cronogrma" img="/eventlist.svg" link="/" />
                <AsideButton nome="Perfil" img="/profile.svg" link="/" />
            </aside>
        </>
    )
}