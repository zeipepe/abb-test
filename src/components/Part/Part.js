import React from "react";
import PropTypes from "prop-types";
import styles from "./Part.module.css";
import Feature from "../Feature/Feature";

function Part(props) {
  return (
    <div className={styles.part}>
      <h2>{props.name}</h2>
      <div className={styles.featuresContainer}>
        {props.features.map((feature, index) => (
          <Feature key={"feat-" + props.name + "-" + index} {...feature} />
        ))}
      </div>
    </div>
  );
}

Part.propTypes = {
  name: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      control: PropTypes.name,
    })
  ).isRequired,
};

export default Part;
