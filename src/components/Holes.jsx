export default function Holes({ moleHole }) {
  return (
    <section className="holes">
      {moleHole.map((hasMole, index) => (
        <div key={index} className={hasMole ? "hole mole" : "hole"}></div>
      ))}
    </section>
  );
}
