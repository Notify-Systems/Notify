export default function Nome({ nomeRef }) {
    return (
        <>
            <h2>Nome: </h2>
            <input ref={nomeRef} type="text" id="inputNome"/>
        </>
    )
}