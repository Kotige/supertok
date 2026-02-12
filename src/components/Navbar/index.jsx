import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { label: "Início", id: "home" },
        { label: "Sobre", id: "sobre" },
        { label: "Produtos", id: "produtos" },
        { label: "SAC", id: "sac" },
        { label: "Catálogo", id: "catalogo" },
        { label: "Fale Conosco", id: "contato" },
        { label: "Seja um revendedor", id: "revendedor" },
    ];

    // Trava scroll quando menu mobile estiver aberto
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => {
        document.body.style.overflow = "auto";
        };
    }, [open]);

    // Observa seções visíveis
    useEffect(() => {
        const sections = navLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px", // ativa quando a seção está no meio da tela
                threshold: 0.1,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Scroll programático sem mudar URL
    const handleScrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full z-50 bg-black">
                <nav
                className="
                    mx-auto max-w-7xl py-4 px-4
                    flex items-center justify-between
                    md:justify-center
                "
                >
                    {/* Desktop menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.id;

                            return (
                                <li key={link.id}>
                                    <button
                                        onClick={() => handleScrollTo(link.id)}
                                        className={`
                                        text-sm tracking-wide transition-colors cursor-pointer
                                        ${isActive ? "text-gold" : "text-off hover:text-gold-start"}
                                        `}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen((prev) => !prev)}
                        className="md:hidden fixed top-4 right-4 z-[60] text-off bg-black/70 backdrop-blur-md p-2 rounded-lg"
                        aria-label={open ? "Fechar menu" : "Abrir menu"}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </header>

            {/* Backdrop */}
            <div
                role="presentation"
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`
                fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity
                ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* Mobile Menu */}
            <aside
                className={`
                md:hidden
                fixed top-0 right-0 z-[50] h-screen w-1/2 bg-black
                transform transition-transform duration-300 ease-out
                ${open ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <ul className="flex flex-col gap-6 p-6 mt-16">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;

                        return (
                            <li key={link.id}>
                                <button
                                onClick={() => handleScrollTo(link.id)}
                                className={`
                                    text-lg transition-colors text-left cursor-pointer
                                    ${isActive ? "text-gold" : "text-off hover:text-gold-start"}
                                `}
                                >
                                    {link.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Espaçamento */}
            <div className="h-[72px]" />
        </>
    );
}
