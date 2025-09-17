import useGame from "../GameContext";

export default function Welcome() {
  const { start, isGame } = useGame();
  return (
    <>
      <h2>Welcome to the best Whack-A-Mole Game</h2>
      <p>
        Catch these pesky moles by clicking on them! Be careful though, they
        move around a lot!
      </p>
      <aside>Press START to play!</aside>
      <button id="start" aria-label="start game" onClick={start}>
        {isGame ? "End" : "Start"}
      </button>
    </>
  );
}
