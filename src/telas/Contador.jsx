import AreaPontos from "../componentes/AreaPontos";

export default function Contador() {
    const nome1 = "Felipe"
    const nome2 = "sasa"
    const pontos1 = 1
    const pontos2 = 1
    const btnTruco = "Truco"
    const naipe1 = "copas"
    const naipe2 = "paus"

    return(
        <section className="h-screen px-3 py-5 flex flex-col justify-between">
            <AreaPontos naipe={naipe1} nome={nome1} pontos={pontos1} />

            <div className="flex flex-row justify-between items-center">
                <hr className="w-[100%]" />
                <button className="text-[25px] w-90 bg-black mx-1 font-medium">{btnTruco}</button>
                <hr className="w-[100%]" />
            </div>

            <AreaPontos naipe={naipe2} nome={nome2} pontos={pontos2} />

            <span></span>
            
        </section>
    )
}