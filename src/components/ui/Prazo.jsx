export default function Prazo() {
    return (
        <>
            <h2>Prazo:</h2>
            <article className="date-time">
                <div>
                    <h2>Data:</h2>
                    <input type="date" id="dateInput" />
                </div>
                <div>
                    <h2>Horário:</h2>
                    <input type="time" id="timeInput" />
                </div>
            </article>
        </>
    )
}