// import PropTypes from "prop-types";
import { StyledDisplay } from "../Styles/StyledDisplay";
import style from "./style.module.scss";

function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver} className={style.display}><span>{text}</span></StyledDisplay>;
}

Display.defaultProps = {};

Display.propTypes = {};


export default Display;