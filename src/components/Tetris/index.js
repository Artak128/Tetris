import Stage from "../Stage/index.js";
import Display from "../Display/index.js";
import StartButton from "../StartButton";
import { createStage } from "../../utils/helpers.js";
import style from "./style.module.scss";

function Tetris() {
  return (
    <div className={style.tetris}>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  );
}

export default Tetris;
