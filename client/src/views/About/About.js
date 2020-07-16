import React, {useEffect} from "react";
import styles from "./About.module.css";
function About() {
    useEffect(()=>{
     document.title="About";   
    },[])
  return (
    <div className={styles.about}>
      <h1>Welcome</h1>
      <p>
        This is a test application showing false data about fictional parts.
        Developed by Ezequiel Pepe for ABB.
      </p>
    </div>
  );
}

export default About;
