import s from "./ProductPage.module.css";
import { Link } from "react-router";
import foto from "../../assets/product.png";
import { PATH } from "../../routing/Routing";

export function ProductPage() {
  return (
    <div className={`${s.product} container`}>
      <div className={s.hleb}>
        <nav>
          <Link to={PATH.Home}>Главная</Link>
          <p>/</p>
          <Link to={PATH.Catalog}>Каталог</Link>
          <p>/</p>
          <Link to={PATH.Catalog}>Верхняя одежда</Link>
        </nav>
      </div>
      <div className={s.product_content}>
        <img src={foto} alt="" />
        <div className={s.name}>
          <h4>ВЕРХНЯЯ ОДЕЖДА</h4>
          <h3>Шерстяное пальто свободного кроя</h3>
          <h6>$189</h6>
          <h5>
            Спокойный оттенок, свободный силуэт и ничего лишнего. Пальто для
            повседневных сочетаний — с трикотажем, платьем или любимыми брюками.
          </h5>
          <hr />

          <div className={s.color}>
            <div className={s.color_name}>
              <h2>Цвет:</h2>
              <h3>Овсяный</h3>
            </div>
            <div className={s.color_block}></div>
          </div>

          <div className={s.size_block}>
            <p>Размер</p>
            <nav>
              <a href="">XS</a>
              <a href="">S</a>
              <a href="">M</a>
              <a href="">L</a>
              <a href="">XL</a>
            </nav>
          </div>

          <div className={s.plus}>
            <div className={s.plus_block}>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <Link className={s.add} href="">Добавить в корзину</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
