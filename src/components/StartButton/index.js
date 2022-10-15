// import PropTypes from "prop-types";
import { StyledStartButton } from "../Styles/StyledStartButton";
import style from "./style.module.scss";

function StartButton({ callback }) {
  return (
    <StyledStartButton onClick={callback} className={style.startButton}>
      <span>Start Game</span>
    </StyledStartButton>
  );
}

StartButton.defaultProps = {};

StartButton.propTypes = {};

export default StartButton;
