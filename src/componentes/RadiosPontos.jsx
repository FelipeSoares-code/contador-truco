import { useState } from "react"
import { useApp } from "../AppContext"

export default function RadiosPontos() {
    const [pontosParaVitoria, setPontosParaVitoria] = useState(12)

    const { setQuantPontos } = useApp()

    const estiloLabelRadio = "cursor-pointer px-4 py-2 text-sm font-bold bg-[var(--color-cinza-claro)] text-gray-300 peer-checked:bg-red-700 peer-checked:text-white transition"

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-medium">
                Quantidade de Pontos Para Vitória
            </h1>
            <div className="flex">
                <span>
                    <input
                        className="peer hidden"
                        type="radio"
                        id="pont3"
                        name="pontos"
                        value="3"
                        checked={pontosParaVitoria === 3}
                        onChange={() => setPontosParaVitoria(3)}
                    />
                    <label className={estiloLabelRadio} htmlFor="pont3">3</label>
                </span>

                <span>
                    <input
                        className="peer hidden"
                        type="radio"
                        id="pont6"
                        name="pontos"
                        value="6"
                        checked={pontosParaVitoria === 6}
                        onChange={() => setPontosParaVitoria(6)}
                    />
                    <label className={estiloLabelRadio} htmlFor="pont6">6</label>
                </span>

                <span>
                    <input
                        className="peer hidden"
                        type="radio"
                        id="pont9"
                        name="pontos"
                        value="9"
                        checked={pontosParaVitoria === 9}
                        onChange={() => setPontosParaVitoria(9)}
                    />
                    <label className={estiloLabelRadio} htmlFor="pont9">9</label>
                </span>

                <span>
                    <input
                        className="peer hidden"
                        type="radio"
                        id="pont12"
                        name="pontos"
                        value="12"
                        checked={pontosParaVitoria === 12}
                        onChange={() => setPontosParaVitoria(12)}
                    />
                    <label className={estiloLabelRadio} htmlFor="pont12">12</label>
                </span>
            </div>
        </div>
    )
}