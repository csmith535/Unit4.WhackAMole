import useGame from "../GameContext";

export default function Holes({ moleHole, onHoleClick }) {
  const { incScore } = useGame();

  return (
    <section className="holes">
      {moleHole.map((hasMole, index) => (
        <div
          key={index}
          className={hasMole ? "hole mole" : "hole"}
          onClick={() => (onHoleClick(index) ? incScore() : null)}
        ></div>
      ))}
    </section>
  );
}
