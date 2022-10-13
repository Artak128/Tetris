// import PropTypes from "prop-types";
import Cell from "../Cell";
import { StyledStage } from "../Styles/StyledStage";
import style from "./style.module.scss";

function Stage({ stage }) {
  return (
    <div className={style.stage}>
      <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row =>
          row.map((cell, x) => <Cell key={x} type={cell[0]} />)
        )}
      </StyledStage>
    </div>
  );
}

Stage.defaultProps = {};

Stage.propTypes = {};

export default Stage;
