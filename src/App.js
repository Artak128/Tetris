import Background from "./components/Background";
import { Loading } from "./lottie/loading/index";
import Tetris from "./components/Tetris";
import "./App.css";

let condition = false;
function App() {
  return (
    <Background>
      <div className="main">{condition ? <Loading /> : <Tetris />}</div>
    </Background>
  );
}

export default App;
//18:00
