import Stage from "../Stage/index.js";
import Display from "../Display/index.js";
import StartButton from "../StartButton";
import { createStage } from "../../utils/helpers.js";
import style from "./style.module.scss";
import { StyledTetris } from "../Styles/StyledTetris.js";

function Tetris() {
  return (
    <div className={style.tetris}>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </div>
  );
}

export default Tetris;
