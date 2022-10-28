export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

/**
 * Create an array of arrays with length STAGE_HEIGHT, each with a length of STAGE_WIDTH, and fill each array with an array of
 * length 2, with the first element being 0 and the second element being "clear".
 */
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );

/**
 * We're checking if the Tetromino is inside the game area and if it's not colliding with any other Tetromino
 */
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that were on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Check that our move is inside the game areas height (y)
          // We Shouldnt go through the bottom of the play area
          !stage[y + player.pos.y + moveY] ||
          // 3. Check that our move is inside the game areas width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Check that the cell were moving to isnt set to clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
