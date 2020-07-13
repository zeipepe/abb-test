import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { BsExclamationCircle, BsXCircle, BsCheckCircle } from "react-icons/bs";
import { FiCircle } from "react-icons/fi";
import styles from "./Feature.module.css";
import lineIcon from "./line.svg";
const colors = {
  ok: "#329a5d",
  warning: "#e9c704",
  error: "#f62d3d",
};

function FeatureHeader(props) {
  return (
    <div className={cx(styles.header, styles[props.status])}>
      <h3>
        <div className={styles.circle}>
          <FiCircle size="25px" />
        </div>
        <div className={styles.title}>{props.children}</div>
        <div className={styles.icon}>{iconFromStatus(props.status)}</div>
      </h3>
    </div>
  );
}

function iconFromStatus(status, size = "23px", color = false) {
  switch (status) {
    case "error":
      return <BsXCircle size={size} color={color ? colors[status] : "white"} />;
    case "warning":
      return <BsExclamationCircle size={size} color={color ? colors[status] : "white"} />;
    case "ok":
    default:
      return <BsCheckCircle size={size} color={color ? colors[status] : "white"} />;
  }
}

function Feature(props) {
  const { name, controls } = props;
  const [featureState, setFeatureState] = useState("ok");
  const [controlSections, setControlSections] = useState([]);
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
  }, [controls]);
  useEffect(() => {
    function chunkArray(array, size) {
      let result = [];
      for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
      }
      return result;
    }
    setControlSections(chunkArray(controls, 12));
  }, [controls]);

  const featureGridArea = {
    gridArea:
      "auto / auto / span " +
      (controls.length > 4 ? 2 : 1) +
      " / span " +
      controlSections.length,
  };
  
  return (
    <div className={styles.featureContainer} style={featureGridArea}>
      <FeatureHeader status={featureState}>{name.toUpperCase()}</FeatureHeader>
      <div className={styles.controlsContainer}>
        {controlSections.map((sectionControls, scIndex) => (
          <table
            className={styles.controlsTable}
            key={"sectionControl-" + name + "-" + scIndex}
          >
            <tr>
              <th><div className={styles.alignLeft}>Control</div></th>
              <th>Dev</th>
              <th>Dev Out Tol</th>
              <th></th>
            </tr>
            {sectionControls.map((control, cIndex) => (
              <tr key={"control-" + name + "-" + control.name + cIndex}>
                <td><div className={styles.alignLeft}>{control.name}</div></td>
                <td>{control.dev}</td>
                <td>{control.devTol}</td>
                <td><div className={styles.shiftLeft}>{iconFromStatus(control.status, "15px", true)}</div></td>
              </tr>
            ))}
          </table>
        ))}
      </div>
      <div className={styles.holder}>
        <img height="25px" src={lineIcon} alt="draggable" />
      </div>
      <div></div>
    </div>
  );
}

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  controls: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      dev: PropTypes.number,
      devTol: PropTypes.number,
      status: PropTypes.oneOf(["ok", "warning", "error"]),
    })
  ).isRequired,
};

export default Feature;
