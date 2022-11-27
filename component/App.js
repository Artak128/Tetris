import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="circleAndNumber">
        <div className="circleOff"></div>
        <div className="numberLeft">456</div>
      </div>

      <div className="line lineFirst lineActive"></div>
      <div className="circleAndNumber">
        <div className="circleOff"></div>
        <div className="numberCenter">656</div>
      </div>
      <div className="line"></div>
      <div className="circleAndNumber">
        <div className="circleOff"></div>
        <div className="numberCenter">656</div>
      </div>
      <div className="line"></div>
      <div className="circleAndNumber">
        <div className="circleOff"></div>
        <div className="numberCenter">656</div>
      </div>
      <div className="line"></div>
      <div className="circleAndNumber">
        <div className="circleOff"></div>
        <div className="numberCenter">656</div>
      </div>
      <div className="line lineFirst"></div>
      <div className="circleAndNumber">
        <div className="circleOff"></div>
        <div className="numberRight">956</div>
      </div>
    </div>
  );
}

export default App;
