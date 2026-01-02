import { BsSuitClubFill as NaipePaus } from "react-icons/bs";
import { FaHeart as NaipeCopas } from "react-icons/fa6";
import { BsSuitSpadeFill as NaipeEspadas } from "react-icons/bs";
import { FaDiamond as NaipeOuros } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function AreaPontos({naipeNum, nome, valorPonto, reiniciarValorTruco}){

    const naipes = [
        (<NaipeOuros className="text-red-700"/>),
        (<NaipeEspadas/>),
        (<NaipeCopas className="text-red-700"/>),
        (<NaipePaus/>)
    ]

    const [selectedNaipe, setSelectedNaipe] = useState(naipes[naipeNum])

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
                <h1 className="font-bold">{nome}</h1>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button className="w-[100%] h-[100%] text-sm" 
                    onClick={() => mudarValorPonto(-1)}
                >-{valorPonto}</button>

                <span className="text-[100px]">{pontos}</span>
                <button className="w-[100%] h-[100%] text-sm" 
                    onClick={() => mudarValorPonto(1)}
                >+{valorPonto}</button>
            </div>
        </>
    )
}