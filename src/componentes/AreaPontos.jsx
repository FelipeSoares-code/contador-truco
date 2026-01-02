import { BsSuitClubFill as NaipePaus } from "react-icons/bs";
import { FaHeart as NaipeCopas } from "react-icons/fa6";
import { BsSuitSpadeFill as NaipeEspadas } from "react-icons/bs";
import { FaDiamond as NaipeOuros } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Contador from "../telas/Contador";

export default function AreaPontos({naipe, nome, valorPonto, reiniciarValorTruco}){

    const naipes = [
        (<NaipeOuros/>),
        (<NaipeEspadas/>),
        (<NaipeCopas/>),
        (<NaipePaus/>)
    ]

    const [selectedNaipe, setSelectedNaipe] = useState(naipes[0])

    useEffect(() => {
        const num = Math.floor(Math.random() * 4)
        setSelectedNaipe(naipes[num])
    }, [])

    const [pontos, setPontos] = useState(0)

    const mudarValorPonto = (operador) => {
        if (operador == 1 && pontos < 12) 
            setPontos(pontos + valorPonto)
        else if(operador == -1 && pontos > 0)
            setPontos(pontos - valorPonto)

        reiniciarValorTruco()
    }

    return (
        <>
            <div className="flex gap-4 items-center text-[32px]">
                <span className="">{selectedNaipe}</span>
                <h1 className="">{nome}</h1>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button className="w-[100%] h-[100%] text-sm" 
                    onClick={() => mudarValorPonto(-1)}
                >-{valorPonto}</button>

                <span className="text-[100px]">{pontos}</span>
                <button className="w-[100%] text-sm" 
                    onClick={() => mudarValorPonto(1)}
                >+{valorPonto}</button>
            </div>
        </>
    )
}