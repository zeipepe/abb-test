import React from "react";
import Part from "../../components/Part/Part";
function Parts() {
  const parts = [
    {
      name: "Part A",
      features: [
        {
          name: "Feature Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "error" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "error" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "error" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
      ],
    },
    {
      name: "Part A",
      features: [
        {
          name: "Feature Name",
          controls: [
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "warning" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
            { name: "control", dev: 0, devTol: 0, status: "ok" },
          ],
        },
      ],
    },
  ];

  return (
    <div className="App">
      {parts.map((part, index) => (
        <Part key={"part-" + index} name={part.name} features={part.features} />
      ))}
    </div>
  );
}

export default Parts;
