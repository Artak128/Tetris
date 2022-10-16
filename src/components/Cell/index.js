// import PropTypes from "prop-types";
import { StyledCell } from "../Styles/StyledCell";
import { TETROMINOS } from "../../utils/tetrominos";
import style from "./style.module.scss";

function Cell({ type }) {
  return (
    <div className={style.cell}>
      <StyledCell type={type} color={TETROMINOS[type].color} />
    </div>
  );
}

Cell.defaultProps = {};

Cell.propTypes = {};

export default Cell;
