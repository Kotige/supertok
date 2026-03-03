import { useState } from "react";

export default function Dealer() {

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cidadeEstado: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="revendedor" className="bg-black flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-off text-center pt-8">
                Seja um 
                <br />
                <span className="text-gold">revendedor</span>
            </h2>
            <div className="text-off text-center mx-8 mt-10">
                <p>
                    Leve a força da Super Tok para o seu negócio. Oferecemos produtos com alto giro, visual profissional e excelente custo-benefício para pontos de venda e distribuidores.
                </p>
                <p className="mt-6">
                    <strong>Benefícios:</strong> Marca em crescimento; 
                    <br /> Portfólio enxuto e eficiente; 
                    <br /> Suporte Comercial; 
                    <br />Produtos com alta aceitação no mercado.
                </p>
            </div>
            {/* Formulário */}
            <div className="w-full max-w-xl mt-14 px-12 pb-14">
                <form onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                >
                    <input type="text" 
                        name="nome"
                        placeholder="Nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="bg-transparent border border-gold/40 p-4 text-off placeholder-gray-500 focus:outline-none focus:border-gold transition"
                    />
                    <input type="email" 
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-transparent border border-gold/40 p-4 text-off placeholder-gray-500 focus:outline-none focus:border-gold transition"
                    />
                    <input type="text" 
                        name="cidadeEstado"
                        placeholder="Cidade / Estado"
                        value={formData.cidadeEstado}
                        onChange={handleChange}
                        required
                        className="bg-transparent border border-gold/40 p-4 text-off placeholder-gray-500 focus:outline-none focus:border-gold transition"
                    />
                    <textarea name="mensagem"
                        placeholder="Mensagem"
                        rows="4"
                        value={formData.mensagem}
                        onChange={handleChange}
                        required
                        className="bg-transparent border border-gold/40 p-4 text-off placeholder-gray-500 focus:outline-none focus:border-gold transition"
                    />
                    <button
                        type="submit"
                        className="bg-transparent text-off font-semibold py-2 border border-gold/40 hover:bg-gold/80 transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}