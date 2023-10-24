import {
    createContext
} from "react"

export const MainDataContext = createContext()

export default function MainDataContextFunc({children}){
    let namaWeb = "GARUDA GAMING"
    return(
        <MainDataContext.Provider value={[namaWeb]}>
            {children}
        </MainDataContext.Provider>
    )
}