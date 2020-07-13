import React, { useState, useEffect } from "react";
import Part from "../../components/Part/Part";
import styles from "./Parts.module.css";
function Parts() {
  // const parts = [
  //   {
  //     name: "Part A",
  //     features: [
  //       {
  //         name: "Feature Name",
  //         controls: [
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //       {
  //         name: "Feature's Name",
  //         controls: [
  //           { name: "X", dev: 0,status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //       {
  //         name: "Feature's Name",
  //         controls: [
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //       {
  //         name: "Feature's Name",
  //         controls: [
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //       {
  //         name: "Feature's Name",
  //         controls: [
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //       {
  //         name: "Feature's Name",
  //         controls: [
  //           { name: "X", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Y", dev: 0, devTol: 0, status: "warning" },
  //           { name: "Z", dev: 0, devTol: 0, status: "ok" },
  //           { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Part A",
  //     features: [
  //       {
  //         name: "Feature Name",
  //         controls: [
  //           { name: "control", dev: 0, devTol: 0, status: "ok" },
  //           { name: "control", dev: 0, devTol: 0, status: "warning" },
  //           { name: "control", dev: 0, devTol: 0, status: "ok" },
  //           { name: "control", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //       {
  //         name: "Feature Name",
  //         controls: [
  //           { name: "control", dev: 0, devTol: 0, status: "ok" },
  //           { name: "control", dev: 0, devTol: 0, status: "warning" },
  //           { name: "control", dev: 0, devTol: 0, status: "ok" },
  //           { name: "control", dev: 0, devTol: 0, status: "ok" },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const [parts, setParts] = useState([]);
  useEffect(() => {
    const tolerances = {
      X: 0.3,
      Y: 0.3,
      Z: 0.3,
      Diameter: 0.4,
      Length: 0.2,
    };

    const generateParts = (partsBase) => {
      return partsBase.map((part) => ({
        ...part,
        features: part.features.map((feature) => ({
          ...feature,
          controls: feature.controls.map((name) => {
            let control = { name: name };
            control.dev = (parseInt(Math.random() * 30)/100);
            control.devTol = Math.max(0, control.dev - tolerances[name]);
            control.status =
              control.devTol > 0
                ? "error"
                : control.dev > tolerances[name] / 2
                ? "warning"
                : "ok";
            return {...control,dev: control.dev.toFixed(2),devTol: control.devTol.toFixed(2)};
          }),
        })),
      }));
    };

    const interval = setInterval(() => {
      setParts(
        generateParts([
          {
            name: "Part A",
            features: [
              {
                name: "Seam",
                controls: [
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                ],
              },
              { name: "Slot", controls: ["X", "Y", "Z", "Diameter"] },
              { name: "Hole", controls: ["X", "Y", "Z", "Diameter"] },
            ],
          },
          {
            name: "Part B",
            features: [
              {
                name: "Seam",
                controls: [
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                  "X",
                  "Y",
                  "Z",
                  "Length",
                ],
              },
              { name: "Slot", controls: ["X", "Y", "Z", "Diameter"] },
              { name: "Hole", controls: ["X", "Y", "Z", "Diameter"] },
            ],
          },
        ])
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.partsContainer}>
      {parts.map((part, index) => (
        <Part key={"part-" + index} name={part.name} features={part.features} />
      ))}
    </div>
  );
}

export default Parts;
