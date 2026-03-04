import "./styles.scss";
import models from "../../../assets/images/hero/models.png";
import logo from "../../../assets/images/hlogo.png";
import vlogo from "../../../assets/images/vlogo.png";

export default function Hero() {
    return (
        <section id="home" className="relative h-[100vh] flex items-center">
            <div className="bg-hero"/>
            <div className="hero-content w-full px-6 lg:px-16 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Top content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                    <img 
                        src={vlogo}
                        className="max-w-[280px] px-8 -mt-4 mb-16 lg:hidden"
                        alt="Logo" 
                    />
                    <img 
                        src={logo}
                        className="hidden lg:flex max-w-[380px]"
                        alt="Logo" 
                    />
                    <div className="flex flex-col items-center justify-center mx-6 pb-26">
                        <p className="text-off px-8 mb-6 lg:hidden">
                            Produtos automotivos e para bike desenvolvidos para quem busca <span className="font-bold">resultado profissional!</span>
                        </p>
                        <a 
                            href="#catalogo" 
                            className="text-off text-sm font-semibold border px-2 py-1 uppercase"
                        >
                            Conheça nossa linha de produtos
                        </a>
                    </div>
                    <div className="mt-110 bg-about hidden" />
                    
                </div>
                {/* Right bottom content */}
                <div className="hidden md:flex flex-col items-center gap-6 max-w-md mx-auto lg:mx-0">
                    <img 
                        src={models}
                        className="w-full max-w-[420px]"    
                        alt="Modelos" 
                    />
                    <div className="text-off text-center text-sm lg:text-base">
                        <p>
                            Produtos automotivos e para bike desenvolvidos para quem busca <span>resultado profissional!</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}