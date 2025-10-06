import { createContext, useContext, useState } from "react";

export const TasksContext = createContext();

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    function addTask(_title, _subject, _date) {
        const taskList = useContext(TasksContext);
        const newTask = {
            id: taskList.length++,
            title: _title,
            subject: _subject,
            date: _date,
            done: false
        };
    }

    function removeTask(_id) {
        setTasks(tasks.filter((_, i) => i !== _id));
    }

    function editTask(_id, _title, _subject, _date) {
        setNotes(notes.map(taskI => 
            taskI.id === _id
            ? { ...taskI, title: _title, subject: _subject, task: _task }
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