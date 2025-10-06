import { createContext, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    function addTask(_title, _subject, _date, _time) {
        const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
        const newTask = {
            id: newId,
            title: _title,
            subject: _subject,
            date: _date,
            time: _time,
            done: false
        };
        setTasks([...tasks, newTask]);
    }

    function removeTask(_id) {
        setTasks(tasks.filter((_, i) => i !== _id));
    }

    function editTask(_id, _title, _subject, _date, _time) {
        setNotes(notes.map(taskI => 
            taskI.id === _id
            ? { ...taskI, title: _title, subject: _subject, date: _date, time: _time }
            : taskI
        ));
    }

    function toggleTask(_id) {
        setNotes(notes.map(taskI =>
            taskI.id === _id
            ? {...taskI, done: !taskI.done}
            : taskI
        ));
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask, editTask, toggleTask }}>
            { children }
        </TasksContext.Provider>
    );
}