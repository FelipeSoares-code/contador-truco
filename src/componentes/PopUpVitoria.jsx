import { BsSuitClubFill as NaipePaus } from "react-icons/bs";
import { FaHeart as NaipeCopas } from "react-icons/fa6";
import { BsSuitSpadeFill as NaipeEspadas } from "react-icons/bs";
import { FaDiamond as NaipeOuros } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../AppContext";

export default function PopUpVitoria({open, close, nome, naipeNum}) {
    if(!open) return null

    const {pathPadrao} = useApp()

    const navigate = useNavigate()

    const telaInicial = () => navigate(pathPadrao)
    const reiniciar = () => close()

    const naipes = [
        (<NaipeOuros className="text-red-700"/>),
        (<NaipeEspadas className="text-blue-200"/>),
        (<NaipeCopas className="text-red-700"/>),
        (<NaipePaus className="text-blue-200"/>)
    ]

    const [naipe, setNaipe] = useState(naipes[naipeNum])

    const estiloBtn = "bg-black p-2 text-lg rounded font-medium"

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center justify-between gap-2 p-4 py-12 bg-[var(--color-cinza-claro)] border-2 border-black rounded-md relative min-w-[320px] max-w-[90vw] h-[90%]">
                <span className="flex items-center gap-3 text-[30px]">
                    {naipe}
                    <h1>VITÓRIA!</h1>
                    {naipe}
                </span>

                <span className="text-[20px]">{nome} venceu o jogo!</span>

                <div className="flex flex-col gap-5">
                    <button className={estiloBtn} onClick={() => reiniciar()}>Começar novo jogo</button>
                    <button className={estiloBtn} onClick={() => telaInicial()}>Ir para tela inicial</button>
                </div>
            </div>
        </div>
    )
}