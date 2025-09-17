import useGame from "./GameContext.jsx";

import Holes from "./components/holes.jsx";
import Welcome from "./components/Welcome.jsx";

export default function App() {
  const { isGame } = useGame();
  return (
    <>
      <h1> Whack-A-Mole </h1>
      {isGame ? <Holes /> : <Welcome />}
    </>
  );
}
