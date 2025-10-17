import { createContext, useState } from "react"

export const ConfigContext = createContext();

export function ConfigProvider({ children }) {
    const [config, setConfig] = useState("closed")

    function toggleOpen() {
        setConfig(`${config === "open" ? "closed" : "open"}`)
    }

    return (
        <ConfigContext.Provider value={{config, toggleOpen}}>
            {children}
        </ConfigContext.Provider>
    )
}