import { useNavigate } from "react-router"
import { useApp } from "../AppContext"

export default function Erro404() {
    const navigate = useNavigate()
    const {pathPadrao} = useApp()
    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            Está pagina não existe

            <button className="bg-red-700 p-3 rounded" onClick={() => navigate(pathPadrao)}>Ir para tela inicial</button>
        </div>
    )
}