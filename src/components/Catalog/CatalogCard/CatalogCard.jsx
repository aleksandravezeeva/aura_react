import { Link } from "react-router";
import s from "./CatalogCard.module.css";
import product from "../../../assets/product.png";
import { PATH } from "../../../routing/Routing";
import { categories } from '../../../assets/data.js';

export function CatalogCard({ product }) {
   const category = categories.find(category => category.id == product.categoryId);
  return (
    <div className={s.card}>
      <img src={product.image} alt="" />
      <div className={s.name_product}>
        <div className={s.price_name}>
          <p>{product.title}</p>
          <h3>{product.price}₽</h3>
        </div>
        <div className={s.opis}>{product.color} ·{category.title} </div>
        <Link className={s.but} to={`/product/${product.id}`}>Добавить в корзину</Link>
      </div>
    </div>
  );
}

