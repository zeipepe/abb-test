import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import {
  BsCircle,
  BsExclamationCircle,
  BsXCircle,
  BsCheckCircle,
} from "react-icons/bs";
import styles from "./Feature.module.css";

function FeatureHeader(props) {
  return (
    <div className={cx(styles.header, styles[props.status])}>
      <h3>
        <div className={styles.circle}>
          <BsCircle  size="25px"/>
        </div>
        <div className={styles.title}>{props.children}</div>
        <div className={styles.icon}>{iconFromStatus(props.status)}</div>
      </h3>
    </div>
  );
}

function iconFromStatus(status) {
  let size="25px";
  switch (status) {
    case "error":
      return <BsXCircle  size={size} />;
    case "warning":
      return <BsXCircle size={size} />;
    case "ok":
    default:
      return <BsXCircle  size={size} />;
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
  },[controls]);
  useEffect(() => {
    function chunkArray(array, size) {
        let result = []
        for (let i = 0; i < array.length; i += size) {
          let chunk = array.slice(i, i + size)
          result.push(chunk)
        }
        return result
      }
      setControlSections(chunkArray(controls,12))
  },[controls.length]);
  


  return (
    <div className={styles.featureContainer}>
      <FeatureHeader status={featureState}>{name.toUpperCase()}</FeatureHeader>
      <div className={styles.controlsContainer}>
      {controlSections.map((sectionControls,scIndex)=>(
          <table key={"sectionControl-"+name+"-"+scIndex}>
              <tr>
                  <th>
                      Control
                  </th>
                  <th>
                      Dev
                  </th>
                  <th>
                    Dev Out Tol
                  </th>
                  <th></th>
              </tr>
                  {sectionControls.map((control,cIndex)=>(
                  <tr key={"control-"+name+"-"+control.name+cIndex}>
                      <td>{control.name}</td>
                      <td>{control.dev}</td>
                      <td>{control.devTol}</td>
                      <td>{control.status}</td>
                  </tr>
                  ))}
          </table>
      ))}
      </div>
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
