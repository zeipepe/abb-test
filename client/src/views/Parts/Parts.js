import React, { useState, useEffect } from "react";
import Part from "../../components/Part/Part";
import styles from "./Parts.module.css";
const io = require('socket.io-client');
const socket = io('http://localhost:3001');
function Parts() {
  useEffect(() => {
    document.title = "Parts";
  }, []);
  const [parts, setParts] = useState([]);
  /**
   * Make initial request for data
   */
  useEffect(() => {
    //Define function inside the effect to avoid issues with dependencies
    const getParts = async () => {
      const response = await fetch("/parts");
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    };

    getParts()
      .then((res) => setParts(res))
      .catch((err) => console.log(err));
    //generate mock data
    //generate initial data
  }, []);

  /**
   * Set up socket communication to update data
   */
  useEffect(() => {
    //Define function inside the effect to avoid issues with dependencies
      socket.on('parts', (parts) => {
        //console.log("parts from socket",parts)
        setParts(parts)
      })
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
