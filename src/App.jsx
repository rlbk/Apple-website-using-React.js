import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
    </main>
  );
}
