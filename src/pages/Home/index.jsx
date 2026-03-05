import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Sac from "./SAC";
import Catalog from "./Catalog";
import Contact from "./Contact";
import Dealer from "./Dealer";
import Footer from "../../components/Footer";

import "./styles.scss";

import element from "../../assets/images/bggold.png";
import duo from "../../assets/images/about/mockup-duo.png";

import produto1 from "../../assets/images/products/mockup1.png"
import produto2 from "../../assets/images/products/mockup2.png"
import produto3 from "../../assets/images/products/mockup3.png"
import produto4 from "../../assets/images/products/mockup4.png"
import produto5 from "../../assets/images/products/mockup5.png"

const products = [
    {
        id: 1,
        title: "Limpa Pneus",
        description: "Acabamento, proteção e visual renovado.",
        image: produto1,
        gradientEnd: "#65477B",
        gradientInit: "#8F66B0"
    },
    {
        id: 2,
        title: "Limpa Vidros",
        description: "Transparência e visibilidade com fácil aplicação.",
        image: produto2,
        gradientEnd: "#184682",
        gradientInit: "#4F7FB3"
    },
    {
        id: 3,
        title: "Multiuso",
        description: "Limpeza prática para diversas superfícies.",
        image: produto3,
        gradientEnd: "#046614",
        gradientInit: "#32C24A"
    },
    {
        id: 4,
        title: "Desengraxante Automotivo",
        description: "Força contra sugeiras pesadas.",
        image: produto4,
        gradientEnd: "#870009",
        gradientInit: "#ED0918"
    },
    {
        id: 5,
        title: "Linha Bike",
        description: "Produtos específicos para manutenção e cuidado da bicicleta.",
        image: produto5,
        gradientEnd: "#FF9100",
        gradientInit: "#D9B63A"
    }
];

export default function Home () {

    return (
        <main className="relative overflow-x-hidden bg-black">
            <Navbar />
            <Hero />
                <div className="hidden lg:flex">
                    <img 
                        src={element} 
                        alt="" 
                        className="absolute right-[-130px] top-[400px] w-[810px] pointer-events-none z-1"
                        />
                </div>
                <div className="hidden lg:flex">
                    <p className="absolute right-[150px] top-[500px] pointer-events-none z-10 -rotate-9 text-center text-xl">
                        Produtos automotivos e para bike desenvolvidos <br /> para quem busca <span className="font-bold">resultado profissional!</span>
                    </p>
                </div>
                <div className="hidden lg:flex">
                    <img 
                        src={duo} 
                        alt="" 
                        className="absolute right-[50px] top-[700px] w-[500px] pointer-events-none z-40"
                        />
                </div>
            <About />
                <div className="hidden lg:flex">
                    <img 
                        src={element} 
                        alt="" 
                        className="absolute right-[-260px] top-[1160px] w-[810px] pointer-events-none z-10"
                        />
                </div>
            <Products />
                <div className="
                    hidden lg:flex gap-4 lg:gap-8
                    overflow-x-visible
                    pb-4
                    snap-x snap-mandatory
                    mx-8 mt-16 lg:mt-32 mb-8
                    z-40 items-center justify-center
                ">
                    {products.map((product) => (
                        <div key={product.id}
                            className="min-w-[180px] max-w-[180px] min-h-[280px] max-h-[280px] flex-shrink-0 border border-off p-4 snap-start z-40"
                            style={{background: `radial-gradient(circle at center, ${product.gradientInit} 10%, ${product.gradientEnd} 70%)`}}
                        >
                            <div className="h-10 flex items-center justify-center mb-30">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                />
                            </div>
                            <h3 className="text-sm text-off font-semibold mb-2 text-center">
                                {product.title}
                            </h3>
                            <p className="text-xs text-off text-center">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex items-center justify-center">
                    <a 
                        href="#catalogo" 
                        className="text-off text-sm font-semibold border px-8 py-1 uppercase hover:bg-gold/90 transition-colors duration-300 ease-in-out"
                    >
                        Fale com um representante
                    </a>
                </div>
            <Sac />
            <Catalog />
            <Dealer />
            <Contact />
            <Footer />
        </main>
    )
}