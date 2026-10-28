import { Catalog } from "../../components/Catalog/Catalog";
import s from "./CatalogPage.module.css";
import { categories, products } from '../../assets/data';



export function CatalogPage() {
  return (
    <div className={`${s.catalog} container`}>
      <div className={s.catalog_name}>
        <div className={s.title}>
          <h3>КОЛЛЕКЦИЯ НА КАЖДЫЙ ДЕНЬ</h3>
          <h2>Найдите свою любимую вещь.</h2>
          <h5>
            Продуманные базовые вещи и лёгкие сочетания, к которым хочется
            возвращаться снова и снова.
          </h5>
        </div>
        <div className={s.poisk}>
          <input className={s.poick_block} type="text" placeholder="Поиск по коллекции" />

          <nav>

            <a className={s.active}>Все</a>
            {
              categories.map(category =>
                <a key={category.id}>{category.title}</a>
              )
            }
            
          </nav>
        </div>

        <div className={s.statist}>
          <p>Показано 8 предметов</p>
          {/* <section>
          <option value="">Сортировать по цене</option>
          <option value="">Сортировать по цене</option>
          <option value="">Сортировать по цене</option>
         </section> */}
        </div>
      </div>

      <Catalog />

      <div className={s.text_down}>
        <h3>Вы просмотрели всю коллекцию.</h3>
        <h4>Скоро здесь появятся новые вещи на каждый день.</h4>
      </div>
    </div>
  );
}
