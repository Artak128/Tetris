// import PropTypes from "prop-types";
import style from "./style.module.scss";

function StartButton({ callback }) {
  return (
    <div className={style.startButton}>
      Start Game
    </div>
  );
}

StartButton.defaultProps = {};

StartButton.propTypes = {};

export default StartButton;
