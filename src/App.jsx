import { useRef } from "react";

function makeMole() {
  const holes = Array.from({ length: 9 }, () => false);

  const randomIndex = Math.floor(Math.random() * 9);

  holes[randomIndex] = true;

  return holes;
}

export default function App() {
  const mole = useRef(makeMole());
  return <></>;
}
