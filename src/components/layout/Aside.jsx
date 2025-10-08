import AsideButton from "../ui/AsideButton"

export default function Aside({ select }) {
    const name = ["Menu", "Estudos", "Adicionar", "Cronograma", "Perfil"]
    
    return (
        <>
            <aside>
                <AsideButton nome={name[0]} img={`home`} link="/add/grade" select={select === name[0] ? true : false} />
                <AsideButton nome={name[1]} img={`studies`} link="/add/grade" select={select === name[1] ? true : false} />
                <AsideButton nome={name[2]} img={`add`} link="/add/grade" select={select === name[2] ? true : false} />
                <AsideButton nome={name[3]} img={`eventlist`} link="/add/grade" select={select === name[3] ? true : false} />
                <AsideButton nome={name[4]} img={`profile`} link="/add/grade" select={select === name[4] ? true : false} />
            </aside>
        </>
    )
}