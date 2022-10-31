import Background from "../src/components/background/index.js";
import { Loading } from "./lottie/loading";
import Tetris from "./components/Tetris";
import "./App.scss";

let condition = false;
function App() {
  return (
    <Background>
      <div className="main">{condition ? <Loading /> : <Tetris />}</div>
    </Background>
  );
}

export default App;
//2:01:01
