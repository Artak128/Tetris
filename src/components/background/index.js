import style from "./style.module.scss";

 function Background({children}) {
  return (
    <div className={style.background}>
      <div className={style.blurry}>
        {children}
      </div>
    </div>
  );
}

export default Background;
