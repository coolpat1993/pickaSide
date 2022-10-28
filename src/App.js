import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Players from "./components/Players";
import Timer from "./components/Timer";

function App() {
  const [choice, setChoice] = useState("none");
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(3);
  const [winner, setWinner] = useState("none");
  const [truePlayers, setTruePlayers] = useState([]);

  return (
    <>
      <Header />
      <Timer
        setChoice={setChoice}
        choice={choice}
        setDisabled={setDisabled}
        timer={timer}
        setTimer={setTimer}
        winner={winner}
        setWinner={setWinner}
        truePlayers={truePlayers}
        setTruePlayers={setTruePlayers}
      />
      <br></br>
      <Buttons
        choice={choice}
        setChoice={setChoice}
        disabled={disabled}
        timer={timer}
        winner={winner}
      />
      <Players
        choice={choice}
        timer={timer}
        winner={winner}
        truePlayers={truePlayers}
        setTruePlayers={setTruePlayers}
      />
    </>
  );
}

export default App;
