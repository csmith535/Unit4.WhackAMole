import useGame from "../GameContext";

export default function Holes() {
  const { incScore, moleHole, handleHoleClick, isGame, toggleGame, score } =
    useGame();

  return (
    <>
      <div>
        <h4>Score: {score}</h4>
      </div>
      <section className="holes">
        {moleHole.map((hasMole, index) => (
          <div
            key={index}
            className={hasMole ? "hole mole" : "hole"}
            onClick={() => (handleHoleClick(index) ? incScore() : null)}
          ></div>
        ))}
      </section>
      <button
        id="toggle"
        aria-label="Toggle game start/game end"
        onClick={toggleGame}
      >
        {isGame ? "End" : "Start"}
      </button>
    </>
  );
}
