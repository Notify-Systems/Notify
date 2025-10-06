import { ThemeProvider } from "./ThemeContext"
import { GradesProvider } from "./GradesContext"
import { SubjectProvider } from "./SubjectContext"
import { NotesProvider } from "./NotesContext"
import { TasksProvider } from "./TasksContext"

export function AppProviders({ children }) {
    return(
        <ThemeProvider>
            <GradesProvider>
                <SubjectProvider>
                    <NotesProvider>
                        <TasksProvider>
                            { children }
                        </TasksProvider>
                    </NotesProvider>
                </SubjectProvider>
            </GradesProvider>
        </ThemeProvider>
    )
}