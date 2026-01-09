import { BsSuitClubFill as NaipePaus } from "react-icons/bs";
import { FaHeart as NaipeCopas } from "react-icons/fa6";
import { BsSuitSpadeFill as NaipeEspadas } from "react-icons/bs";
import { FaDiamond as NaipeOuros } from "react-icons/fa6";
import { useRef, useState } from "react";
import RadiosPontos from "../componentes/RadiosPontos";
import { useApp } from "../AppContext";
import { useNavigate } from "react-router-dom";


export default function Inicial() {

    const navigate = useNavigate()

    const refNome1 = useRef(null)
    const refNome2 = useRef(null)

    const { setNomeGrupo1, setNomeGrupo2, setTipoTruco } = useApp()

    const iniciar = () => {
        const nome1 = refNome1.current.value
        const nome2 = refNome2.current.value
        setNomeGrupo1(nome1 != [] ? nome1 : "Grupo 1")
        setNomeGrupo2(nome2 != [] ? nome2 : "Grupo 2")
        setTipoTruco(modoJogo)

        navigate("/contador")
    }

    const [modoJogo, setModoJogo] = useState('paulista')

    const estiloNaipe = "text-[27px]"
    const estiloLabelRadio = "cursor-pointer px-4 py-2 text-sm font-bold bg-[var(--color-cinza-claro)] text-gray-300 peer-checked:bg-red-700 peer-checked:text-white transition"
    const estiloInputText = "h-9 bg-[var(--color-cinza-claro)] px-3 font-medium"

    return (
        <div className="flex flex-col gap-10 p-4">
            <div className="flex flex-col">
                <h1 className="m-auto text-[30px] font-bold">Contador de Truco</h1>
                <div className={"flex flex-row justify-center gap-3"}>
                    <NaipeOuros className={`${estiloNaipe} text-red-700`} />
                    <NaipeEspadas className={`${estiloNaipe} text-blue-200`} />
                    <NaipeCopas className={`${estiloNaipe} text-red-700`} />
                    <NaipePaus className={`${estiloNaipe} text-blue-200`} />
                </div>
                <hr className="mt-5"/>
            </div>

            <div className="h-10 overflow-hidden flex justify-center items-center">
                <span>
                    <input className="peer hidden"
                        type="radio" id="paulista"
                        name="tipo" value="paulista" defaultChecked
                        onChange={() => setModoJogo('paulista')}
                    />
                    <label className={estiloLabelRadio} htmlFor="paulista">Truco Paulista</label>
                </span>

                <span>
                    <input className="peer hidden" type="radio"
                        id="mineiro" name="tipo" value="mineiro"
                        onChange={() => setModoJogo('mineiro')}
                    />
                    <label className={estiloLabelRadio} htmlFor="mineiro">Truco Mineiro</label>
                </span>
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-medium" htmlFor="grupo1">Nome do Grupo 1</label>
                <input className={estiloInputText} type="text" id="grupo1" ref={refNome1} />

                <label className="font-medium" htmlFor="grupo2">Nome do Grupo 2</label>
                <input className={estiloInputText} type="text" id="grupo2" ref={refNome2} />
            </div>

            <RadiosPontos />

            <button 
                className="bg-red-700 h-15 w-30 mt-10 m-auto font-bold rounded-md" 
                onClick={() => iniciar()}>
                    Iniciar
            </button>
        </div>
    )
}