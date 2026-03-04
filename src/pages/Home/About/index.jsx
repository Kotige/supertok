import duo from "../../../assets/images/about/mockup-duo.png" 
import elemento from "../../../assets/images/about/bggold.png"
import "./styles.scss"

export default function About() {
    return (
        <section id="sobre" className="bg-black lg:bg-white about-section h-[160vh] lg:h-[100vh] flex items-center">
            {/* Mobile design */}
            <div className="about-bg lg:hidden"/>
            <div className="block about-content lg:hidden w-full flex flex-col items-center">
                <img
                    src={duo}
                    alt="Produtos Super Tok"
                    className="w-[40vw] -mb-18 z-[0]"
                />

                <div className="m-6 pt-14 bg-white text-black px-4 pb-6 text-center">
                    <h3 className="text-4xl font-bold mb-4">
                        Resultado visível, 
                        <br /> 
                        <span className="text-gold">sem complicação</span>
                    </h3>
                    <p className="text-base font-semibold">
                        A Super Tok é uma marca cearense criada para atender quem cuida do carro,
                        da moto ou da bicicleta no dia a dia. Unimos eficiência, facilidade de uso
                        e visual profissional em produtos que entregam performance real, tanto
                        para o consumidor final quanto para o profissional.
                    </p>
                </div>
            </div>
            {/* Desktop design */}
            <div className="hidden lg:flex relative overflow-visible justify-center items-center">
                {/* Elementos decorativos */}
                <img 
                    src={elemento} 
                    alt="" 
                    className="absolute -top-74 left-141 w-[1000px] max-w-none z-0"
                />
                <img 
                    src={elemento} 
                    alt="" 
                    className="absolute -top-40 -left-90 w-[1000px] max-w-none z-0"
                />
                <div className="relative flex items-center mx-5">
                    <div className="bg-white ms-26 py-16 px-12">
                        <h2 className="text-5xl font-extrabold mb-6">
                            Resultado visível,
                            <br />
                            <span className="text-gold">sem complicação</span>
                        </h2>
                        <p className="text-justify  text-lg font-medium">
                            A Super Tok é uma marca cearense criada para atender quem cuida do carro, da moto ou da bicicleta no dia a dia. Unimos eficiência, facilidade de uso e visual profissional em produtos que entregam performance real, tanto para o consumidor final quanto para o profissional.
                        </p>
                    </div>
                    <div className="flex-shrink-0 relative -top-0 -translate-x-15">
                        <img 
                            src={duo} 
                            alt="Produtos Super Tok" 
                            className="w-[500px] w-max-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}