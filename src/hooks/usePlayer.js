import { useState, useCallback } from "react";

import { TETROMINOS } from "../utils/tetrominos";
import { STAGE_WIDTH } from "../utils/initialStage";
import { randomTetromino } from "../utils/helpers"; 

/**
 * It returns an array with the player's state, a function that updates the player's position, and a
 * function that resets the player's position
 */
export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });


  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer];
};

 