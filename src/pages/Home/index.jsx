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

export default function Home () {
    return (
        <main className="relative overflow-x-hidden">
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
            <Sac />
            <Catalog />
            <Dealer />
            <Contact />
            <Footer />
        </main>
    )
}