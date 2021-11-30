import React from "react";
import styles from "../styles/Projects.module.css";
import jump from "../images/jump.png";
import typeracer from "../images/typeracer.png";
import git from "../images/git.png";
import enigma from "../images/enigma.png";
import zombies from "../images/zombies.png";


function Projects() {
  return (
    <div className={styles}>

      <div class = {styles.headerOne} >
      <h1 class="font-weight-bold">Projects</h1>
      </div>

      <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src={git}
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">Gitlet</h2>


          <p>
          - Wrote a Java version control system to replicate Git’s functionality, implementing branching, staging, merging, commits, etc. <br />
          - Used breadth-first search to detect split points in commit history, allowing for correct branch merging
        </p>


          </div>

        </div>


      <div class ={styles.rowOne}>
        <div class={styles.enigma}>

        <img
            src={enigma}
            width = "200"
            height = "200"
            alt=""
        />
        </div>

      <div class={styles.jumpText}>
        <h2 class="font-weight-bold">Engima Machine Simulator</h2>
      
        <p>
        - Wrote a Java program that simulates Enigma machines Germany used during World War II to encrypt its military communications. <br />
        - Handles sets of initial configurations and takes in messages to encode or decode.<br />
        - Uses Regex, HashMap, ArrayList, Scanner, and other OOP data structures to handle string manipulation, data mapping, and file reading for encryption<br />
        - Test Driven Development with Junit tests<br />
        </p>
      
        </div>
        </div>


        <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src={jump}
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">JUMP</h2>


          <p>
          - Coded an AI Java program that uses simulates a jumping board game <br />
          - Users place dots on the board,  each turn potentialy filling neighboring squares <br />
          - first person to cover the entire board wins <br />
          - Usies game trees, hashmap, arraylist, and other OOP data structures <br />
          - Test Driven Development with Junit Tests <br />
        </p>


          </div>

        </div>


        <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src={typeracer}
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">TypeRacer</h2>


          <p>
          - Wrote a python program that enables a two person game of TypeRacer <br />
          - Tracks the typing speed and autocorrects each word
        </p>


          </div>

        </div>

        <div class={styles.rowTwo}>
          <div class = {styles.jump} >
          <img
              src={zombies}
              width = "200"
              height = "200"
              alt=""
          />
          </div>

          <div class ={styles.jumpText}>
          <h2 class="font-weight-bold">Plants VS Zombies</h2>


          <p>
          - Coded a python tower defense game that tracks different classes of characters with unique attributes. <br />
          - Keeps track of the gamestate to protect home base from enemy attackers.
        </p>


          </div>

        </div>

    </div>

    




 


  );
}


export default Projects;