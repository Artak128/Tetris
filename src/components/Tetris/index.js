import { useState } from "react";
import Stage from "../Stage/index.js";
import Display from "../Display/index.js";
import StartButton from "../StartButton";
// import { createStage } from "../../utils/helpers.js";
// import style from "./style.module.scss";
import { StyledTetris } from "../Styles/StyledTetris.js";
import { usePlayer } from "../../hooks/usePlayer.js";
import { useStage } from "../../hooks/useStage.js";

function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  return (
    <StyledTetris>
      <Stage stage={stage} />
      <aside>
        {gameOver ? (
          <Display gameOver={gameOver} text="Game Over" />
        ) : (
          <>
            <Display text="Rows" />
            <Display text="Level" />
            <Display text="Score" />
          </>
        )}

        <StartButton />
      </aside>
    </StyledTetris>
  );
}

export default Tetris;
