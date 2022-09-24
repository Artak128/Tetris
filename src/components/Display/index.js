// import PropTypes from "prop-types";
import style from "./style.module.scss";

function Display({ gameOver, text }) {
  return <div className={style.display}>{text}</div>;
}

Display.defaultProps = {};

Display.propTypes = {};


export default Display;