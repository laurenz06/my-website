import React from "react";
import styles from "../styles/Home.module.css";
import profileImage from "../images/profileimage.png";
import icons from "../images/icons.png";


function Home() {
  return (
    <div className={styles.major}>

      <div class={styles.about}>
        <h1 class="font-weight-bold">Hi!</h1>

        <h1 class="font-weight-bold">I’m Lauren Zheng</h1>

        <p>
        A software developer <br />
        A guitarist <br />
        A plushie enthusiast<br />
        </p>
      
        <p>
        Welcome to my portfolio!
        </p>

        <div class={styles.socialmedia}>
        <img
            src= {icons}
            alt=""
        />
        </div>

        </div>
    
    
      <div class={styles.profile}>
        <img
            src= {profileImage}
           
            alt=""
        />
        </div>
    </div>
  );
}


export default Home;