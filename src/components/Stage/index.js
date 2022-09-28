// import PropTypes from "prop-types";
import Cell from "../Cell";
import style from "./style.module.scss";

function Stage({ stage}) {
  return (
    <div className={style.stage}>
      {stage.map(row => row.map((cell, x)=><Cell key={x} type={cell[0]}/>))}
    </div>
  );
}

Stage.defaultProps = {};

Stage.propTypes = {};

export default Stage;
