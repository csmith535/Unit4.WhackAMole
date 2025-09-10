import { createContext, useContext, useState } from "react";

// CONTEXT
const GameContext = createContext();

// PROVIDER
export function GameProvider({ children }) {
  const [isGame, setIsGame] = useState(false);

  const game = isGame ? "gameOn" : "gameOff";

  const toggleGame = () => {
    setIsGame(isGame);
  };

  const value = { isGame, game, toggleGame };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// HOOK
export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}
