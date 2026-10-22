import s from "./Banner.module.css";

import banner from "../../assets/banner.png";

export function Banner() {
  return (
    <div className={`${s.banner_block} container`}>
      <div className={s.title_block}>
        <h2>НОВЫЙ КАЖДЫЙ ДЕНЬ / ОСЕНЬ 2026</h2>
        <h3> Хороший стиль. Отличный комфорт.</h3>

        <h5>
          Ваши новые любимые вещи на каждый день. Продуманные сочетания, простые
          силуэты и комфорт, который всегда с вами.
        </h5>
        <a href="">Перейти в каталог</a>
      </div>

      <img src={banner} alt="" />
    </div>
  );
}
