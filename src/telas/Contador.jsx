import { useState } from "react";
import AreaPontos from "../componentes/AreaPontos";
import { useApp } from "../AppContext";
import PopUpVitoria from "../componentes/PopUpVitoria";

export default function Contador() {

    const txtTrucoPadrao = "Pedir Truco!"

    const { nomeGrupo1, nomeGrupo2,
            nomeVencedor, naipeVencedor, 
            setReiniciarPontos, tipoTruco } = useApp()

    const [popupOpen, setPopupOpen] = useState(false)
    const [txtTruco, setTxtTruco] = useState(txtTrucoPadrao)
    const [valorPonto, setValorPonto] = useState(tipoTruco === 'paulista' ? 1 : 2)

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

    const trocarValorPonto = (valor, correr = false) => {
        const txtCorreu = "Correu!"
        if (txtTruco == txtCorreu) return

        switch(valor) {
            case 1:
                setTxtTruco("Pedir 6!")
                setValorPonto(3)
                break;
            case 2:
                setTxtTruco("Pedir 6!")
                setValorPonto(4)
                break;
            case 3:
                if (correr) {
                    setTxtTruco(txtCorreu)
                    setValorPonto(1)
                    break
                }
                setTxtTruco("Pedir 9!")
                setValorPonto(6)
                break;
            case 4:
                if (correr) {
                    setTxtTruco(txtCorreu)
                    setValorPonto(2)
                    break
                }
                setTxtTruco("Pedir 10!")
                setValorPonto(6)
                break;
            case 6:
                if (correr) {
                    setTxtTruco(txtCorreu)
                    setValorPonto(tipoTruco === "paulista" ? 3 : 4)
                    break
                }
                setTxtTruco("Pedir 12!")
                setValorPonto(tipoTruco === "paulista" ? 9 : 10)
                break; 
            case 9:
                if (correr) {
                    setTxtTruco(txtCorreu)
                    setValorPonto(6)
                    break
                }
                setTxtTruco("Zerar")
                setValorPonto(12)
                break;
            case 10:
                if (correr) {
                    setTxtTruco(txtCorreu)
                    setValorPonto(6)
                    break
                }
                setTxtTruco("Zerar")
                setValorPonto(12)
                break;
            case 12:
                if (correr) {
                    setTxtTruco(txtCorreu)
                    setValorPonto(9)
                    break
                }
            default:
                reiniciarValorTruco()
                break;   
        }
    }

    const reiniciarValorTruco = () => {
        setValorPonto(tipoTruco === 'paulista' ? 1 : 2)
        setTxtTruco(txtTrucoPadrao)
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
                reiniciarValorTruco={() => reiniciarValorTruco()}
                vitoria={() => setPopupOpen(true)}
            />

            <div className="flex flex-row justify-between items-center">
                <hr className="w-[100%]" />
                <button className="text-[25px] w-150 h-12 bg-black mx-1 font-medium"
                    onClick={() => trocarValorPonto(valorPonto)}
                >{txtTruco}</button>

                {((valorPonto >= 3 && valorPonto < 13) && (txtTruco != "Correu!")) && 
                <button className="text-[25px] w-150 h-12 bg-black mx-1 font-medium"
                    onClick={() => trocarValorPonto(valorPonto, true)}
                >Correr!</button>}

                <hr className="w-[100%]" />
            </div>

            <AreaPontos naipeNum={naipe2} nome={nome2} 
                valorPonto={valorPonto} 
                reiniciarValorTruco={() => reiniciarValorTruco()}
                vitoria={() => setPopupOpen(true)}
            />

            <span></span>
            
        </section>
    )
}