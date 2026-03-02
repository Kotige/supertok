import duo from "../../../assets/images/about/mockup-duo.png" 
import "./styles.scss"

export default function About() {
    return (
        <section className="bg-black about-section h-[160vh] flex items-center">
            <div className="about-bg lg:hidden"/>
            <div id="sobre" className="block about-content lg:hidden w-full flex flex-col items-center">
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
        </section>
    )
}