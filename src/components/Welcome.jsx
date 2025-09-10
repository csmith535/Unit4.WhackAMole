import { useGame } from "../GameContext";

export default function Welcome() {
  const { toggleGame, isGame } = useGame();
  return (
    <>
      <h2>Whack-A-Mole</h2>
      <button
        id="toggle"
        aria-label="Toggle game start/game end"
        onClick={toggleGame}
      >
        {isGame ? "Start" : "End"}
      </button>
    </>
  );
}
