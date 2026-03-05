import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Sac() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Onde posso comprar os produtos Super Tok?",
            answer: "Não. Os produtos Super Tok são desenvolvidos para oferecer alta eficiência na limpeza sem agredir as superfícies quando utilizamos corretamente. Recomendamos sempre seguir o modo de uso indicado no rótulo e, em caso de dúvida ou superfícieis mais sensíveis, realizar um teste prévio em uma pequena área antes da aplicação do produto."
        },
        {
            question: "Os produtos são indicados para uso profissional?",
            answer: "Não. Os produtos Super Tok são desenvolvidos para oferecer alta eficiência na limpeza sem agredir as superfícies quando utilizamos corretamente. Recomendamos sempre seguir o modo de uso indicado no rótulo e, em caso de dúvida ou superfícieis mais sensíveis, realizar um teste prévio em uma pequena área antes da aplicação do produto."
        },
        {
            question: "Os produtos podem danificar superfícies?",
            answer: "Não. Os produtos Super Tok são desenvolvidos para oferecer alta eficiência na limpeza sem agredir as superfícies quando utilizamos corretamente. Recomendamos sempre seguir o modo de uso indicado no rótulo e, em caso de dúvida ou superfícieis mais sensíveis, realizar um teste prévio em uma pequena área antes da aplicação do produto."
        },
        {
            question: "Como armazenar corretamente?",
            answer: "Não. Os produtos Super Tok são desenvolvidos para oferecer alta eficiência na limpeza sem agredir as superfícies quando utilizamos corretamente. Recomendamos sempre seguir o modo de uso indicado no rótulo e, em caso de dúvida ou superfícieis mais sensíveis, realizar um teste prévio em uma pequena área antes da aplicação do produto."
        }
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="sac" className="bg-black pt-8 lg:mt-16 lg:h-[100vh] flex flex-col items-center">
            <h2 className="text-3xl lg:text-4xl text-off text-center font-bold mb-6 lg:mb-12">
                <span className="text-gold">Dúvidas</span> frequentes
            </h2>

            <div className="max-w-3xl mx-6 space-y-4">
                {faqs.map((faq, index) =>(
                    <div key={index}
                        className=" overflow-hidden"
                    >
                        <button
                            onClick={() => handleToggle(index)}
                            className="w-full flex justify-between items-center p-5 text-left text-off hover:bg-off/5 transition"
                        >
                            <span className={`text-sm lg:text-base ${openIndex === index ? "font-bold" : ""}`}>
                                {faq.question}
                            </span>

                            <ChevronDown 
                                className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                            />
                        </button>
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                openIndex === index
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden border border-off/30">
                                <p className="p-5  text-off text-center text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pb-16 flex flex-col gap-8 items-center justify-center">
                <p className="text-off mx-8 text-center font-bold">
                    Caso sua dúvida não esteja aqui,
                    <br className="lg:hidden" />
                    entre em contato conosco.
                </p>

                <a 
                        href="#catalogo" 
                        className="text-off text-sm font-semibold border px-8 py-1 uppercase hover:bg-gold/90 transition-colors duration-300 ease-in-out"
                    >
                        Fale com um representante
                </a>
            </div>

        </section>
    )
}