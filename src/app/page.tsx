import Image from "next/image";

function NavBar(){
    return <div>
        <div className="p-5 flex justify-between w-screen px-[75px] text-[30px] font-last-didone font-hairline gap-12 text-blueFlor">
            <div>Inicio</div>
            <div>Información</div>
            <div>Cuentos</div>
            <div>Recomendaciones</div>
        </div>
        <div className="relative mx-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-blueFlor to-transparent"></div>
        </div>
    </div>
}

function BookPresentation(){
    return <div className="flex w-screen justify-center">
        <Image className="shadow-[rgba(0,0,15,0.5)_10px_5px_4px_0px] mt-[65px]" src="/portada.png" alt="Portada libro" width={183} height={271}/>
        <div className="font-last-didone mt-[77px] ml-[60px]">
            <div className="font-last-didone font-hairline text-[25pt]">Cuentos Nocturnos</div>
            <div className="font-last-didone font-hairline text-[18pt]">por Florencia Mancino</div>
        </div>
    </div>
}

function BookDescription(){
    return <div className="flex mt-[33px]">
        <Image className="w-1/2" src="/portadaPresentada.png" alt="" width={573} height={430}/>
        <div className="bg-blue-flor text-white font-serif w-1/2 pt-[77px] px-[56px]">
            <h3 className="font-last-didone text-[25pt]">Información</h3>
            <p className="max-w-2xl pt-[20px] text-[12pt]">
                Sumérgete en un mundo de suspenso y terror. Esta colección de relatos cortos desafía los límites de la
                mente humana. Cada historia, cargada de intriga y giros inesperados, te llevará a explorar los rincones
                oscuros del miedo y la paranoia. Desde susurros inquietantes hasta revelaciones escalofriantes, este libro es un viaje a través del
                thriller psicológico que mantendrá tus nervios al borde. Prepárate para una experiencia de lectura que
                dejará huella en tu alma.
            </p>
        </div>
    </div>
}

export default function Home() {
    return (
        <div>
            <main>
                <NavBar/>
                <BookPresentation/>
                <BookDescription/>
            </main>
        </div>
    );
}
