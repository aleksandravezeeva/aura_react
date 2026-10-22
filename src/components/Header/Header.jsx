import s from "./Header.module.css";
import logo from "../../assets/Monogram.svg";
import profile from "../../assets/profile.svg";
import { Link } from "react-router";
import { PATH } from "../../routing/Routing";

export function Header() {
  return (
    <header>
      <div className={`${s.header_block} container`}>
        <div className={s.logo_block}>
          <Link to={PATH.Home}>
            <img src={logo} alt="" />{" "}
          </Link>
          <p>aura</p> 
        </div>

        <nav>
          <Link to={PATH.Home}>Главная</Link>
          <Link to={PATH.Catalog}>Каталог</Link>
          <Link to={PATH.Card}>Корзина (0)</Link>
          <Link to={PATH.Profile}>
            <img src={profile} alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
