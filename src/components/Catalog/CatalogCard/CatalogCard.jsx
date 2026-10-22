import { Link } from "react-router";
import s from "./CatalogCard.module.css";
import product from "../../../assets/product.png";
import { PATH } from "../../../routing/Routing";

export function CatalogCard() {
  return (
    <div className={s.card}>
      <img src={product} alt="" />
      <div className={s.name_product}>
        <div className={s.price_name}>
          <p>Шерстяное пальто свободного кроя</p>
          <h3>13 000 ₽</h3>
        </div>
        <div className={s.opis}>Овсяный · Верхняя одежда</div>
        <Link className={s.but} to={PATH.Product}>Добавить в корзину</Link>
      </div>
    </div>
  );
}
