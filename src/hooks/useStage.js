import { useState, useEffect } from "react";
import { createStage } from "../utils/helpers";

/**
 * "useStage is a function that takes in two parameters, player and resetPlayer, and returns an array
 * of two elements, stage and setStage."
 *
 * The first element of the array is the stage, which is a 2D array of arrays. Each element of the
 * stage array is a row of the game board. Each element of the row array is a cell of the game board.
 * Each cell is an array of two elements. The first element is the value of the cell. The second
 * element is the class of the cell.
 *
 * The second element of the array is the setStage function. This function is used to update the stage.
 *
 * The useEffect hook is used to update the stage. The useEffect hook is called whenever the
 * player.collided, player.pos.x, player.pos.y, or player.tetromino variables change.
 *
 * The useStage function is called
 * @param player - The current player state.
 * @param resetPlayer - This is a function that resets the player to its initial state.
 */
export const useStage = (player, resetPlayer) => {
  // export const createStage = () =>
  // Array.from(Array(STAGE_HEIGHT), () =>
  //   new Array(STAGE_WIDTH).fill([0, "clear"])
  // );
  const [stage, setStage] = useState(createStage());

  /** */
  useEffect(() => {
    const updateStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      //Then check if we collided
      if (player.colided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
};
