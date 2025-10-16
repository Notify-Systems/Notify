import { useRef } from "react";

export default function BarraPesquisa({ search, setSearch }) {
    const searchRef = useRef();

    function clear() {
        searchRef.current.value = "";
        setSearch("");
    }

    return (
        <>
            <div className="barra-pesquisa">
                <input ref={searchRef} type="text" className="pesquisa-input" placeholder="Pesquisar" onChange={e => setSearch(e.target.value)} />
                <button className={search !== "" ? "open" : ""} onClick={clear}>
                    <img src={`${import.meta.env.BASE_URL}/btnAdd.svg`} alt="Limpar"/>
                </button>
            </div>
        </>
    )
}