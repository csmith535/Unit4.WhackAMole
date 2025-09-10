import { createContext, useContext, useState } from "react";

// CONTEXT
const GameContext = createContext();

// PROVIDER
export function GameProvider({ children }) {}

// HOOK
export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}
