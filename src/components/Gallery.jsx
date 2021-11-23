import React from "react";
import styles from "../styles/Gallery.module.css";



function Gallery() {
  return (
    <div className={styles.major}>

      <div class={styles.header}>
        <h1 class="font-weight-bold">My life, in snaps</h1>
        </div>
    
    
      <div class={styles.mason}>
        <img
            src="images/masonYuyi.png"
           
            alt=""
        />
        </div>


        <div class={styles.mamaTony}>
        <img
            src="images/mamaTony.png"
           
            alt=""
        />
        </div>

        <div class={styles.hawaii}>
        <img
            src="images/hawaii.png"
           
            alt=""
        />
        </div>

        <div class={styles.snorkel}>
        <img
            src="images/snorkel.png"
           
            alt=""
        />
        </div>

        <div class={styles.annie}>
        <img
            src="images/annie.png"
           
            alt=""
        />
        </div>

        <div class={styles.boyfie}>
        <img
            src="images/boyfie.png"
           
            alt=""
        />
        </div>

        <div class={styles.corndog}>
        <img
            src="images/corndog.png"
           
            alt=""
        />
        </div>

        <div class={styles.hiking}>
        <img
            src="images/hiking.png"
           
            alt=""
        />
        </div>


    </div>
  );
}

export default Gallery;