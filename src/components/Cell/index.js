import PropTypes from "prop-types";
import style from "./style.module.scss";

function Cell({ type }) {
  return <div className={style.cell}>Cell</div>;
}

Cell.defaultProps = {};

Cell.propTypes = {};

export default Cell;