import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.major}>

      <div class={styles.about}>
        <h1 class="font-weight-bold">Hi!</h1>

        <h1 class="font-weight-bold">I’m Lauren Zheng</h1>

       

        <p>
        A software developer
        </p>
        <p>
        A guitarist
        </p>
        <p>
        A plushie enthusiast
        </p>
        <p>
        Welcome to my portfolio!
        </p>

        <div class={styles.socialmedia}>
        <img
            src="images/social media icons.png"
            alt=""
        />
        </div>

        </div>
    
    
      <div class={styles.profile}>
        <img
            src="images/profile image.png"
           
            alt=""
        />
        </div>
    </div>
  );
}


export default Home;