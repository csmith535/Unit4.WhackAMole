import { useRef } from "react";
import Holes from "./components/Holes.jsx";

const HOLES = 9;

function makeMole() {
  const mole = Array.from({ length: HOLES }, () => false);

  const randomIndex = Math.floor(Math.random() * HOLES);

  mole[randomIndex] = true;

  return mole;
}

export default function App() {
  const moleHole = useRef(makeMole());
  return (
    <>
      <main>
        <Holes moleHole={moleHole.current} />
      </main>
    </>
  );
}
