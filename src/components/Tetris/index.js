import Stage from "../Stage/index.js";
import Display from "../Display/index.js";
import StartButton from "../StartButton";
import { createStage } from "../../utils/helpers.js";
// import style from "./style.module.scss";
import { StyledTetris } from "../Styles/StyledTetris.js";

function Tetris() {
  return (
    <StyledTetris>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Rows" />
        <Display text="Level" />
        <Display text="Score" />
        <StartButton />
      </aside>
    </StyledTetris>
  );
}

export default Tetris;
