import modv from "../../assets/images/modv.png"

export default function Footer() {
    return (
        <footer className="bg-black text-off">
            <div className="flex flex-col items-center justify-center">
                <a href="https://modvestudio.com.br/" target="_blank">
                    <img 
                        src={modv} 
                        alt="modv estúdio"
                        className="w-50 my-15"
                    />
                </a>
                <p className="text-sm mb-15">© 2026 modv estúdio. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}