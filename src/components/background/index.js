import style from "./index.module.scss";

 function Main(props) {
  return (
    <div className={style.background}>
      <div className={style.blurry}>
        {props.children}
      </div>
    </div>
  );
}

export default Main;
