import Part from "./Part";
import React from "react";
import { render } from "@testing-library/react";
import styles from "./Feature.module.css";
import cx from "classnames";

const mockPart = {
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
        { name: "X", dev: 0, status: "ok" },
        { name: "Y", dev: 0, devTol: 0, status: "ok" },
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
};

test("Renders as all 6 features", () => {
  const { queryAllByTestId } = render(<Part {...mockPart} />);
  const featureHolders = queryAllByTestId("feature-holder");
  expect(featureHolders.length).toEqual(6);
});
