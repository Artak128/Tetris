// import PropTypes from "prop-types";
import Cell from "../Cell";
import { StyledStage } from "../Styles/StyledStage";
import style from "./style.module.scss";

function Stage({ stage }) {
  return (
    <StyledStage
      width={stage[0].length}
      height={stage.length}
      className={style.stage}
    >
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  );
}

Stage.defaultProps = {};

Stage.propTypes = {};

export default Stage;
