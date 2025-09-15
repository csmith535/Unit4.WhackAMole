import { useState } from "react";
import Holes from "./components/Holes.jsx";
import Welcome from "./components/Welcome.jsx";

export default function App() {
  return (
    <>
      <main>
        <Welcome />
        <Holes />
      </main>
    </>
  );
}
