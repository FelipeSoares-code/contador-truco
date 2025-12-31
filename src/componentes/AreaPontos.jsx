import { BsSuitClubFill as NaipePaus } from "react-icons/bs";
import { FaHeart as NaipeCopas } from "react-icons/fa6";
import { BsSuitSpadeFill as NaipeEspadas } from "react-icons/bs";
import { FaDiamond as NaipeOuros } from "react-icons/fa6";

export default function AreaPontos({naipe, nome, pontos}){
    const Naipe = (
        <NaipeCopas />
    )
    return (
        <>
            <div className="flex gap-4 items-center text-[32px]">
                <span className="">{Naipe}</span>
                <h1 className="">{nome}</h1>
            </div>
            <div className="flex flex-row justify-between items-center">
                <button className="w-[100%] text-sm">-1</button>
                <span className="text-[100px]">{pontos}</span>
                <button className="w-[100%] text-sm">+1</button>
            </div>
        </>
    )
}