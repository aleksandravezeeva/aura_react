import s from "./Novinka.module.css";

export function Novinka() {
  return (
    <div className={`${s.oll_block} container`}>
      <div className={s.title_block}>
        <h4>ЧТО-ТО НОВОЕ</h4>
        <h5>Узнавайте о новинках первыми</h5>
        <h6>Новые коллекции и вдохновение. Прямо в ваш почтовый ящик.</h6>
      </div>

      <div className={s.input_block}>
        <div className={s.email_block}>
          <input type="email" placeholder="Ваш адрес электронной почты" />
          <input type="submit" value="Подписаться" />
        </div>
        <p>Только полезные материалы. Отписаться можно в любой момент.</p>
      </div>
    </div>
  );
}
