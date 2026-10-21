import s from "./Header.module.css";
import logo from "../../assets/Monogram.svg"
import profile from "../../assets/profile.svg"

export function Header() {
    return (
        <header>
            <div className={`${s.header_block} container`}>


                <div className={s.logo_block}>
                    <img src={logo} alt="" />
                    <p>aura</p>
                </div>


                <nav>
                    <a href="">Главная</a>
                    <a href="">Каталог</a>
                    <a href="">Корзина (0)</a>
                    <a href="">
                        <img src={profile} alt="" />
                    </a>
                </nav>

            </div>



        </header>



    )
}