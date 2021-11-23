import React from "react";
import styles from "../styles/About.module.css";


function About() {
  return (
   <div class = {styles.whole} >
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="images/about_me.png"
              width = "500"
              height = "250"
        
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-normal">About me</h1>
            <h1 class="font-weight-light">*\(^o^)/*</h1>



            <p>
            I’m an undergrad at UC Berkeley majoring in Computer Science and minoring in Data Science. 
            </p>
            <p>
            In my free time I love playing the guitar, swimming, and producing music.
            </p>
            <div class={styles.ellipse}>
            <img
                src="images/social media icons.png"
                alt=""
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    
  );
}

export default About;