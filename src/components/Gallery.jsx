import React from "react";
import styles from "../styles/Gallery.module.css";
import mamaTony from "../images/mamaTony.png";
import mason from "../images/masonYuyi.png";
import snorkel from "../images/snorkel.png";
import annie from "../images/annie.png";
import corndog from "../images/corndog.png";
import hawaii from "../images/hawaii.png";
import hiking from "../images/hiking.png";
import boyfie from "../images/boyfie.png";


function Gallery() {
  return (
    <div className={styles.major}>

      <div class={styles.header}>
        <h1 class="font-weight-bold">My life, in snaps</h1>
        </div>
    
        <div class={styles.row}> 
          <div class={styles.mason}>
          <img
              src={mason}
            
              alt=""
          />
          </div>

        <div class={styles.snorkel}>
        <img
            src= {snorkel}
            width = "491"
            height = "340"
           
          
           
            alt=""
        />
        </div>
        
        </div>


      
        <div class={styles.row}> 
            <div class={styles.hawaii}>
            <img
                src={hawaii}
              
                alt=""
            />
            </div>


            <div class={styles.corndog}>
            <img
                src={corndog}
              
                alt=""
            />
            </div>
        </div>


        <div class={styles.row}>
            <div class={styles.annie}>
            <img
                src={annie}
                width = "322"
                height = "383"

                
              
                alt=""
            />
            </div>

              
            <div class={styles.hiking}>
            <img
                src={hiking}
                width = "467"
                height = "313"

              
                alt=""
            />
            </div>


        </div>


        <div class={styles.row}>
            <div class={styles.mamaTony}>
            <img
                src={mamaTony}
              
                alt=""
            />
            </div>

            <div class={styles.boyfie}>
                <img
                    src={boyfie}
                  
                    alt=""
                />
                </div>
       

        </div>
      
      


        


       

    

  


    </div>
  );
}

export default Gallery;