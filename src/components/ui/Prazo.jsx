export default function Prazo({ dateRef, timeRef }) {
    return (
        <>
            <h2>Prazo:</h2>
            <article className="date-time">
                <div>
                    <h2>Data:</h2>
                    <input ref={dateRef} type="date" id="dateInput" />
                </div>
                <div>
                    <h2>Horário:</h2>
                    <input ref={timeRef} type="time" id="timeInput" />
                </div>
            </article>
        </>
    )
}