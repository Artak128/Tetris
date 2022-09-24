import Stage from "../Stage.js";
import Display from "../Display/index.js";
import StartButton from "../StartButton";

function Tetris() {
  return (
    <div>
      <Stage />
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
