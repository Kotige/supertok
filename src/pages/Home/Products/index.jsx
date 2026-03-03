import "./styles.scss";

import Carousel from "./Carousel";

import produto1 from "../../../assets/images/products/mockup1.png"
import produto2 from "../../../assets/images/products/mockup2.png"
import produto3 from "../../../assets/images/products/mockup3.png"
import produto4 from "../../../assets/images/products/mockup4.png"
import produto5 from "../../../assets/images/products/mockup5.png"

export default function Products() {

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
    ]

    return (
        <section id="produtos" className="h-[100vh] bg-black">
            <h2 className="text-3xl text-off font-bold text-center" >
                <span className="text-gold">Soluções</span> para
                <br /> 
                cada tipo de cuidado
            </h2>
            <Carousel products={products} />

            <div className="flex items-center justify-center">
                    <a 
                        href="#catalogo" 
                        className="text-off text-sm font-semibold border px-8 py-1 uppercase"
                    >
                        Fale com um representante
                    </a>
            </div>
        </section>
    )
}