import s from "./Footer.module.css";
import logo from "../../assets/Monogram.svg";

export function Footer() {
  return (
    <footer>
      <div className={`${s.footer_block} container`}>
        <div className={s.up_block}>
          <div className={s.logo_block}>
            <img src={logo} alt="" />
            <p>aura</p>
          </div>

          <nav>
            <a href="">Доставка и возврат</a>
            <a href="">Таблица размеров</a>
            <a href="">Контакты</a>
            <a href="">Instagram</a>
          </nav>
        </div>

        <hr/>

        <div className={s.dowm_block}>
          <p>© 2026 Aura. Все права защищены. </p>
          <nav>
            <a href="">
                Политика конфиденциальности
            </a>
            <a href="">Условия использования</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
