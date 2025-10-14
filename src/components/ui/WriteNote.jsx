export default function WriteNote({ noteRef }) {
    return (
        <>
            <h2>Anotação:</h2>
            <textarea ref={noteRef} id="note" placeholder="Escreva aqui"></textarea>
        </>
    )
}