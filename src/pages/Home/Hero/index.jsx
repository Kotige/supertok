import "./styles.scss";
import models from "../../../assets/images/hero/models.png";
import element from "../../../assets/images/bggold.png";
import logo from "../../../assets/images/hlogo.png";
import vlogo from "../../../assets/images/vlogo.png";

export default function Hero() {
    return (
        <section id="home" className="relative h-[100vh] flex items-center overflow-y-visible lg:z-10">
            <div className="bg-hero"/>
            <div className="hero-content w-full px-6 lg:px-36 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Top content */}
                <div className="flex flex-col items-center lg:justify-center lg:items-start text-center lg:text-left lg:mt-16 gap-6">
                    <img 
                        src={vlogo}
                        className="max-w-[280px] px-8 -mt-4 mb-16 lg:hidden"
                        alt="Logo" 
                    />
                    <div className="flex flex-col items-center justify-center mx-6 lg:mx-0 pb-26">
                        <p className="text-off px-8 mb-6 lg:hidden">
                            Produtos automotivos e para bike desenvolvidos para quem busca <span className="font-bold">resultado profissional!</span>
                        </p>
                        <img 
                            src={logo}
                            className="hidden lg:flex max-w-[380px] my-12"
                            alt="Logo" 
                        />
                        <a 
                            href="#catalogo" 
                            className="text-off text-sm font-semibold border px-2 lg:px-4 py-1 uppercase text-center hover:bg-gold/90 transition-colors duration-300 ease-in-out"
                        >
                            Conheça nossa linha de produtos
                        </a>
                    </div>
                    <div className="mt-110 bg-about hidden" />
                    
                </div>
                {/* Right bottom content */}
                <div className="hidden lg:flex flex-col items-center w-[100%] mx-auto lg:mx-0 overflow-visible pb-35 overflow-y-visible">
                    <div className="relative w-full flex justify-center">
                        <img 
                            src={models}
                            className="w-full w-[80%] max-w-none h-auto relative translate-x-24"    
                            alt="Modelos" 
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}