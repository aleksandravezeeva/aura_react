import s from "./ProductPage.module.css";
import { Link } from "react-router";
import foto from "../../assets/product.png";
import { useParams } from 'react-router';
import { categories, products } from '../../assets/data';
import { PATH } from "../../routing/Routing";

export function ProductPage() {
  const { id } = useParams();
  const product = products.find(product => product.id == id);
  const category = categories.find(category => category.id == product.categoryId);
  return (
    <div className={`${s.product} container`}>
      <div className={s.hleb}>
        <nav>
          <Link to={PATH.Home}>Главная</Link>
          <p>/</p>
          <Link to={PATH.Catalog}>Каталог</Link>
          <p>/</p>
          <Link to={PATH.Catalog}>{category.title}</Link>
        </nav>
      </div>
      <div className={s.product_content}>
        <img src={product.image} alt="" />
        <div className={s.name}>
          <h4>{category.title}</h4>
          <h3>{product.title}</h3>
          <h6>{product.price}</h6>
          <h5>
            {product.description}
          </h5>
          <hr />

          <div className={s.color}>
            <div className={s.color_name}>
              <h2>Цвет:</h2>
              <h3>{product.color}</h3>
            </div>
            <div
              style={{ backgroundColor: product.color_block}}
              className={s.color_block}
            ></div>
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
