import "./styles.scss";
import tablet from "../../../assets/images/catalog/mockup-tablet.png"

export default function Catalog() {
    return (
        <section id="catalogo" className="bg-gold bg-catalog flex flex-col items-center justify-center pb-10">
            <h2 className="text-4xl text-black text-center font-bold pt-10">
                Catálogo
                <br />
                Super Tok
            </h2>
            <p className="text-center text-black font-semibold mx-16 mt-8">
                Baixe nosso catálogo completo e conheça todas as linhas, produtos e especificações técnicas.
            </p>
            <img src={tablet} alt="Catálogo Super Tok" />
            <a 
                href="#catalogo" 
                className="text-off text-sm font-semibold border px-8 py-1 uppercase"
            >
                Baixar Catálogo em PDF
            </a>

            <h2 className="text-4xl text-black text-center font-bold pt-10" >
                Sobre a 
                <br />
                Super Tok
            </h2>

            <p className="text-center text-black mt-6 mx-6 font-semibold">
                Fundada em 2022, a Super Tok surgiu como parte da expansão do portfólio da indústria VQuímica, que já atuava no mercado de produtos de limpeza doméstica. Com o crescimento do setor automotivo e a força do marcado nacional, a Super Tok nasceu com o objetivo de oferecer produtos eficientes, acessíveis e com identidade visual forte.
                <br />
                Nosso compromisso é entregar soluções práticas, confiáveis e fáceis de usar, sem excessos técnicos e sem custos elevados.
            </p>
        </section>
    )
}