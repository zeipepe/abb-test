import React from "react";
import Part from "../../components/Part/Part";
import styles from './Parts.module.css'
function Parts() {
  const parts = [
    {
      name: "Part A",
      features: [
        {
          name: "Feature Name",
          controls: [
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
          ],
        },
        {
          name: "Feature's Name",
          controls: [
            { name: "X", dev: 0, devTol: 0, status: "ok" },
            { name: "Y", dev: 0, devTol: 0, status: "warning" },
            { name: "Z", dev: 0, devTol: 0, status: "ok" },
            { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
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
    <div className={styles.partsContainer}>
      {parts.map((part, index) => (
        <Part key={"part-" + index} name={part.name} features={part.features} />
      ))}
    </div>
  );
}

export default Parts;
