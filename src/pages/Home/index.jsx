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

export default function Home () {
    return (
        <main className="bg-hero">
            <Navbar />
            <Hero />
            <About />
            <Products />
            <Sac />
            <Catalog />
            <Contact />
            <Dealer />
            <Footer />
        </main>
    )
}