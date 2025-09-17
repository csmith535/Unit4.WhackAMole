import useGame from "../GameContext";

export default function Welcome() {
  const { start, isGame } = useGame();
  return (
    <>
      <h2>Whack-A-Mole</h2>
      <button id="start" aria-label="start game" onClick={start}>
        {isGame ? "End" : "Start"}
      </button>
    </>
  );
}
