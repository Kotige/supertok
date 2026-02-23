import "./styles.scss";
import models from "../../../assets/images/hero/models.png";
import logo from "../../../assets/images/hlogo.png";

export default function Hero() {
    return (
        <section id="home" className="relative mt-8 h-[90vh] flex items-center">
            <div className="bg-hero"/>
            <div className="hero-content w-full px-6 lg:px-16 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Top content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                    <img 
                        src={logo}
                        className="max-w-[320px] lg:max-w-[280px]"
                        alt="Logo" 
                    />
                    <div className="flex mx-6 md:hidden">
                        <p className="text-off">
                            Produtos automotivos e para bike desenvolvidos para quem busca <span className="font-bold">resultado profissional!</span>
                        </p>
                    </div>
                    <a 
                        href="#catalogo" 
                        className="text-off border px-2 py-1 uppercase"
                    >
                        Conheça nossa linha de produtos
                    </a>
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