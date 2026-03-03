import logo from "../../../assets/images/hlogo.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contato" className="bg-black flex flex-col items-center justify-center">
            <div className="my-12">
                <img 
                    src={logo} 
                    alt="Super Tok" 
                    className="w-75"
                />
            </div>
            <h2 className="text-3xl text-off font-bold mb-8">
                Fale com a gente:
            </h2>
            <div className="text-black text-xl flex gap-4 mb-8">
                <a href="https://facebook.com" className="bg-off rounded rounded-full p-2"><FaFacebookF /></a>
                <a href="https://instagram.com" className="bg-off rounded rounded-full p-2"><FaInstagram /></a>
                <a href="https://youtube.com" className="bg-off rounded rounded-full p-2"><FaYoutube /></a>
                <a href="https://youtube.com" className="bg-off rounded rounded-full p-2"><FaLinkedinIn /></a>
                <a href="https://twitter.com" className="bg-off rounded rounded-full p-2"><FaTwitter /></a>
            </div>

            <div className="flex flex-col text-off items-center text-sm my-10">
                <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
                <p><strong>RAZÃO SOCIAL:</strong> SUPER TOK LTDA</p>
                <p><strong>NOME FANTASIA:</strong> SUPER TOK</p>
            </div>

            <div className="flex flex-col text-off items-center text-sm mb-20">
                <p><strong>CONTATO:</strong> <a href="">(00) 00000-0000</a></p>
                <p><strong>SAC:</strong> <a href="">0800 0000 0000</a> </p>
                <p><strong>HORÁRIO DE ATENDIMENTO:</strong> <br /> SEG A SEX DE 08H ÀS 18H</p>
            </div>

        </section>
    )
}