import { createContext, useContext, useState } from "react";

// CONSTANTS
const HOLES = 9;

// CONTEXT
const GameContext = createContext();

// PROVIDER
export function GameProvider({ children }) {
  const [isGame, setIsGame] = useState(false);
  const [score, setScore] = useState(0);
  const [moleHole, setMoleHole] = useState(makeMole());

  const incScore = () => {
    setScore(score + 1);
  };

  const game = isGame ? "gameOn" : "gameOff";

  const toggleGame = () => {
    setIsGame(!isGame);
  };

  const handleHoleClick = (index) => {
    if (moleHole[index]) {
      console.log("Hit!");
      setMoleHole(makeMole());
      incScore();
    } else {
      console.log("Miss!");
    }
  };

  const value = {
    isGame,
    game,
    toggleGame,
    score,
    incScore,
    moleHole,
    handleHoleClick,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// HOOK
export default function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}

// MOVE THE MOLE FUNCTION
export function makeMole() {
  const mole = Array.from({ length: HOLES }, () => false);

  const randomIndex = Math.floor(Math.random() * HOLES);

  mole[randomIndex] = true;

  return mole;
}
