import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Feature.module.css";

function FeatureHeader(props) {
  return <div className={styles[props.status]}>{props.children}</div>;
}

function Feature(props) {
  const { name, controls } = props;
  const [featureState, setFeatureState] = useState("ok");
  useEffect(() => {
    setFeatureState(
      controls.reduce((result, control) => {
        switch (control.status) {
          case "error":
            return "error";
          case "warning":
            return result === "error" ? "error" : "warning";
          default:
            return result;
        }
      }, "ok")
    );
  });
  return (
    <div className={styles.featureContainer}>
      <FeatureHeader status={featureState}>{name}</FeatureHeader>
    </div>
  );
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  controls: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      dev: PropTypes.number,
      devTol: PropTypes.number,
      status: PropTypes.oneOf(["ok", "warning", "error"]),
    })
  ).isRequired,
};

export default Feature;
