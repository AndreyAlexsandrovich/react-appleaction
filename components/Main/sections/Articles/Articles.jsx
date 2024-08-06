import "./Articles.css";
export default function Articles() {
  return (
    <>
      <div className="Articles__box">
        <h1 className="Articles__title">Статьи каждую неделю</h1>
      </div>
      <div className="Articles__description">
        <p className="Articles__descr">
          Больше 90% учеников прошли полный курс и смогли <br /> собрать свой
          первый компьютер
        </p>
      </div>
      <div className="form-box">
        <form action="#!">
          <div className="from-input">
            <div className="box">
            <input type="text" className="input" placeholder="E-mail" />
            </div>
            <div className="box-btn">
            <button className="form-btn">Подписаться</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
