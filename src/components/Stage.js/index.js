import PropTypes from "prop-types";
import Cell from "../Cell";
import style from "./style.module.scss";

function Stage({ gameOver, text }) {
  return (
    <div className={style.stage}>
      <Cell />
    </div>
  );
}

Stage.defaultProps = {};

Stage.propTypes = {};

export default Stage;
