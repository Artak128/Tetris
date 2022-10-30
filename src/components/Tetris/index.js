// import { useState } from "react";
// import Stage from "../Stage/index.js";
// import Display from "../Display/index.js";
// import { checkCollision } from "../../utils/helpers.js";
// import StartButton from "../StartButton";
// import { initialStage } from "../../utils/initialStage.js";
// import { StyledTetris } from "../Styles/StyledTetris.js";
// import { usePlayer } from "../../hooks/usePlayer.js";
// import { useStage } from "../../hooks/useStage.js";
// import { StyledTetrisWrapper } from "../Styles/StyledTetrisWrapper.js";
// // import style from "./style.module.scss";

// function Tetris() {
//   const [dropTime, setDropTime] = useState(null);
//   const [gameOver, setGameOver] = useState(false);
//   const [player, updatePlayerPos, resetPlayer] = usePlayer();
//   const [stage, setStage] = useStage(player);

//   const movePlayer = dir => {
//     if (!checkCollision(player, stage, { x: dir, y: 0 })) {
//       updatePlayerPos({ x: dir, y: 0 });
//     }
//   };

//   const startGame = () => {
//     //Reset Everything
//     setStage(initialStage);
//     resetPlayer();
//   };

//   const drop = () => {
//     if (!checkCollision(player, stage, { x: 0, y: 1 })) {
//       updatePlayerPos({ x: 0, y: 1, collided: false });
//     } else {
//       // Game Over
//       if (player.pos.y < 1) {
//         console.log("Game Over !!!");
//         setGameOver(true);
//         setDropTime(null);
//       }
//       updatePlayerPos({ x: 0, y: 0, collided: true });
//     }
//   };

//   const dropPlayer = () => {
//     drop();
//   };

//   const move = ({ keyCode }) => {
//     if (!gameOver) {
//       switch (keyCode) {
//         case 37:
//           movePlayer(-1);
//           break;
//         case 39:
//           movePlayer(1);
//           break;
//         case 40:
//           dropPlayer();
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   return (
//     <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
//       <StyledTetris>
//         <Stage stage={stage} />
//         <aside>
//           {gameOver ? (
//             <Display gameOver={gameOver} text="Game Over" />
//           ) : (
//             <>
//               <Display text="Rows" />
//               <Display text="Level" />
//               <Display text="Score" />
//             </>
//           )}
//           <StartButton callback={startGame} />
//         </aside>
//       </StyledTetris>
//     </StyledTetrisWrapper>
//   );
// }

// export default Tetris;


