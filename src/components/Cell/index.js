// import PropTypes from "prop-types";
import style from "./style.module.scss";
import { StyledCell } from "../Styles/StyledCell";
import { TETROMINOS } from "../../utils/tetrominos";

function Cell({ type }) {
  return (
    <div className={style.cell}>
      <StyledCell type={"L"} color={TETROMINOS["L"].color}>
        Cell
      </StyledCell>
    </div>
  );
}

Cell.defaultProps = {};

Cell.propTypes = {};

export default Cell;
