import Feature from "./Feature";
import React from "react";
import { render } from "@testing-library/react";
import styles from "./Feature.module.css";
import cx from "classnames";

const mockFeatureOk = {
  name: "Feature's Name",
  controls: [
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  ],
};
const mockFeatureWarning = {
  name: "Feature's Name",
  controls: [
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "warning" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  ],
};
const mockFeatureError = {
  name: "Feature's Name",
  controls: [
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "warning" },
    { name: "Diameter", dev: 0, devTol: 0, status: "error" },
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
    { name: "X", dev: 0, devTol: 0, status: "ok" },
    { name: "Y", dev: 0, devTol: 0, status: "ok" },
    { name: "Z", dev: 0, devTol: 0, status: "ok" },
    { name: "Diameter", dev: 0, devTol: 0, status: "ok" },
  ],
};

test("Header is the right color depending on props", () => {
  const { getByTestId,rerender } = render(<Feature {...mockFeatureOk} />);
  const featureHolder=getByTestId("feature-holder");
  let featureHeader=getByTestId("feature-header");
  expect(featureHolder).toBeTruthy();
  expect(featureHeader.className).toEqual(cx(styles.header, styles.ok));

  rerender(<Feature {...mockFeatureWarning} />);
  expect(featureHeader.className).toEqual(cx(styles.header, styles.warning));

  rerender(<Feature {...mockFeatureError} />);
  expect(featureHeader.className).toEqual(cx(styles.header, styles.error));
});

