import { createContext, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([
        {id: 1, title: "Lição de Casa", subject: 1, date: "2025-10-18", time: "07:00", done: false}
    ]);

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
        setTasks(tasks.filter(task => task.id !== _id));
    }

    function editTask(_id, _title, _subject, _date, _time) {
        setTasks(tasks.map(taskI => 
            taskI.id === _id
            ? { ...taskI, title: _title, subject: _subject, date: _date, time: _time }
            : taskI
        ));
    }

    function toggleTask(_id) {
        setTasks(tasks.map(taskI =>
            taskI.id === _id
            ? {...taskI, done: !taskI.done}
            : taskI
        ));
    }

    function returnTask(_id) {
        const task = tasks.find(task => task.id === _id);
        return task ? {id: task.id, title: task.title, subject: task.subject, date: task.date, time: task.time, done: task.done} : null;
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask, editTask, toggleTask, returnTask }}>
            { children }
        </TasksContext.Provider>
    );
}