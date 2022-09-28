// import PropTypes from "prop-types";
import style from "./style.module.scss";
import { StyledCell } from "../Styles/StyledCell";
import { TETROMINOS } from "../../utils/tetrominos";

function Cell({ type }) {
  return <StyledCell className={style.cell}>Cell</StyledCell>;
}

Cell.defaultProps = {};

Cell.propTypes = {};

export default Cell;