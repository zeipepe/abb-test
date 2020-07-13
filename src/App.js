import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Part from "./components/Part/Part";
function App() {
  const part = {
    name: "Part A",
    features: [
      {
        name: "Feature Name",
        controls: [{ name: "control", dev: 0, devTol: 0, status: "ok" },{ name: "control", dev: 0, devTol: 0, status: "warning" },{ name: "control", dev: 0, devTol: 0, status: "error" },{ name: "control", dev: 0, devTol: 0, status: "ok" },{ name: "control", dev: 0, devTol: 0, status: "ok" }],
      },
    ],
  };

  return (
    <div className="App">
      <Part name={part.name} features={part.features} />
    </div>
  );
}

export default App;
