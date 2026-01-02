import { useEffect, useState } from "react";
import AreaPontos from "../componentes/AreaPontos";

export default function Contador() {
    const nome1 = "Felipe"
    const nome2 = "sasa"
    const naipe1 = "copas"
    const naipe2 = "paus"
    
    const [txtTruco, setTxtTruco] = useState("Truco!")
    const [valorPonto, setValorPonto] = useState(1)

    const trocarValorPonto = (valor) => {
        switch(valor) {
            case 1:
                setTxtTruco("Pedir 6!")
                setValorPonto(3)
                break;
            case 3:
                setTxtTruco("Pedir 9!")
                setValorPonto(6)
                break;
            case 6:
                setTxtTruco("Pedir 12!")
                setValorPonto(9)
                break; 
            case 9:
                setTxtTruco("Desistir")
                setValorPonto(12)
                break;
            default:
                setTxtTruco("Truco!")    
                setValorPonto(1)
                break;   
        }
    }

    return(
        <section className="h-screen px-3 py-5 flex flex-col justify-between">
            <AreaPontos naipe={naipe1} nome={nome1} 
                valorPonto={valorPonto} 
                reiniciarValorTruco={() => {
                    setValorPonto(1)
                    setTxtTruco("Truco!")
                }} 
            />

            <div className="flex flex-row justify-between items-center">
                <hr className="w-[100%]" />
                <button className="text-[25px] w-90 bg-black mx-1 font-medium"
                    onClick={() => trocarValorPonto(valorPonto)}
                >{txtTruco}</button>
                <hr className="w-[100%]" />
            </div>

            <AreaPontos naipe={naipe2} nome={nome2} 
                valorPonto={valorPonto} 
                reiniciarValorTruco={() => {
                    setValorPonto(1)
                    setTxtTruco("Truco!")
                }} 
            />

            <span></span>
            
        </section>
    )
}