import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export function AppProvider({ children }) {
    const [ pathPadrao, setPathPadrao ] = useState("/")
    const [ nomeGrupo1, setNomeGrupo1 ] = useState("Grupo 1")
    const [ nomeGrupo2, setNomeGrupo2 ] = useState("Grupo 2")
    const [ quantPontos, setQuantPontos ] = useState(12)
    const [ tipoTruco, setTipoTruco ] = useState('paulista')
    const [ nomeVencedor, setNomeVencedor ] = useState(null)
    const [ naipeVencedor, setNaipeVencedor ] = useState(null)
    const [reiniciarPontos, setReiniciarPontos] = useState(false)

    return (
        <AppContext.Provider
            value={{
                pathPadrao, setPathPadrao,
                nomeGrupo1, setNomeGrupo1,
                nomeGrupo2, setNomeGrupo2,
                quantPontos, setQuantPontos,
                tipoTruco, setTipoTruco,
                nomeVencedor, setNomeVencedor,
                naipeVencedor, setNaipeVencedor,
                reiniciarPontos, setReiniciarPontos
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}