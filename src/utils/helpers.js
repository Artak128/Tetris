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

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {}
};
