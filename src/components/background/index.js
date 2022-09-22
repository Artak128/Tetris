import style from "./style.module.scss";

 function Background(props) {
  return (
    <div className={style.background}>
      <div className={style.blurry}>
        {props.children}
      </div>
    </div>
  );
}

export default Background;
