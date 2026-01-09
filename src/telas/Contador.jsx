import { useEffect, useState } from "react";
import AreaPontos from "../componentes/AreaPontos";
import { useApp } from "../AppContext";
import PopUpVitoria from "../componentes/PopUpVitoria";

export default function Contador() {

    const txtTrucoPadrao = "Pedir Truco!"

    const [popupOpen, setPopupOpen] = useState(false)
    const [txtTruco, setTxtTruco] = useState(txtTrucoPadrao)
    const [valorPonto, setValorPonto] = useState(1)

    const { nomeGrupo1, nomeGrupo2,
            quantPontos, tipoTruco,
            nomeVencedor, naipeVencedor,
            reiniciarPontos, setReiniciarPontos } = useApp()

    const {nomeGrupo1: nome1, nomeGrupo2: nome2} = {nomeGrupo1, nomeGrupo2}

    const [naipes] = useState(() => {
        let n1, n2

        do {
            n1 = Math.floor(Math.random() * 4)
            n2 = Math.floor(Math.random() * 4)
        } while (n1 === n2 || ((n1 + n2) % 2 == 0) )

        return { n1, n2 }
    });

    const { n1: naipe1, n2: naipe2 } = naipes;

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
                setTxtTruco(txtTrucoPadrao)    
                setValorPonto(1)
                break;   
        }
    }

    const fecharPopup = () => {
        setReiniciarPontos(true)
        setPopupOpen(false)
    }

    return(
        <section className="h-screen px-3 py-5 flex flex-col justify-between">
            <PopUpVitoria 
                open={popupOpen} close={() => fecharPopup()} 
                nome={nomeVencedor} naipeNum={naipeVencedor} 
            />

            <AreaPontos naipeNum={naipe1} nome={nome1} 
                valorPonto={valorPonto} 
                reiniciarValorTruco={() => {
                    setValorPonto(1)
                    setTxtTruco(txtTrucoPadrao)
                }}
                vitoria={() => setPopupOpen(true)}
            />

            <div className="flex flex-row justify-between items-center">
                <hr className="w-[100%]" />
                <button className="text-[25px] w-150 h-12 bg-black mx-1 font-medium"
                    onClick={() => trocarValorPonto(valorPonto)}
                >{txtTruco}</button>
                <hr className="w-[100%]" />
            </div>

            <AreaPontos naipeNum={naipe2} nome={nome2} 
                valorPonto={valorPonto} 
                reiniciarValorTruco={() => {
                    setValorPonto(1)
                    setTxtTruco(txtTrucoPadrao)
                }}
                vitoria={() => setPopupOpen(true)}
            />

            <span></span>
            
        </section>
    )
}