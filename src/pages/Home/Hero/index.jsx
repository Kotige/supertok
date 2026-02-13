import "./styles.scss";
import models from "../../../assets/images/hero/models.png";
import logo from "../../../assets/images/hlogo.png";

export default function Hero() {
    return (
        <section id="home" className="mt-5 h-[90vh] flex justify-center items-center">
            <div className="bg-hero"/>
            <div className="flex gap-15 mx-12 hero-content">
                <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-[100%] h-[30%]"/>
                </div>
                <div className="flex items-end justify-end">
                    <img src={models} alt="ciclistas modelos"  className="w-[60%]"/>
                </div>
            </div>
        </section>
    )
}