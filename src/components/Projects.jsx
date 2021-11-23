import React from "react";
import styles from "../styles/Projects.module.css";

function Projects() {
  return (
    <div className={styles}>

      <div class = {styles.headerOne} >
      <h1 class="font-weight-bold">Projects</h1>
      </div>


      <div class ={styles.rowOne}>
        <div class={styles.enigma}>

        <img
            src="images/enigma.png"
            width = "200"
            height = "200"
            alt=""
        />
        </div>

      <div class={styles.enigmaText}>
        <h2 class="font-weight-bold">Engima Machine Simulator</h2>
      
        <p>
        - Wrote a Java program that simulates Enigma machines Germany used during World War II to encrypt its military communications. <br />
        - Handles sets of initial configurations and takes in messages to encode or decode.
        - Uses Regex, HashMap, ArrayList, Scanner, and other OOP data structures to handle string manipulation, data mapping, and file reading for encryption
        - Test Driven Development with Junit tests
        </p>
      
        </div>
        </div>


        <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src="images/jump.png"
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">JUMP</h2>


          <p>
          - Coded an AI Java program that uses simulates a jumping board game 
          - Users place dots on the board,  each turn potentialy filling neighboring squares
          - first person to cover the entire board wins
          - Usies game trees, hashmap, arraylist, and other OOP data structures
          - Test Driven Development with Junit Tests
        </p>


          </div>

        </div>


        <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src="images/typeracer 1.png"
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">TypeRacer</h2>


          <p>
          - Coded an AI Java program that uses simulates a jumping board game 
          - Users place dots on the board,  each turn potentialy filling neighboring squares
          - first person to cover the entire board wins
          - Usies game trees, hashmap, arraylist, and other OOP data structures
          - Test Driven Development with Junit Tests
        </p>


          </div>

        </div>

        <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src="images/ZOMBIES 1.png"
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">Plants VS Zombies</h2>


          <p>
          - Coded an AI Java program that uses simulates a jumping board game 
          - Users place dots on the board,  each turn potentialy filling neighboring squares
          - first person to cover the entire board wins
          - Usies game trees, hashmap, arraylist, and other OOP data structures
          - Test Driven Development with Junit Tests
        </p>


          </div>

        </div>

    </div>

    




 


  );
}


export default Projects;