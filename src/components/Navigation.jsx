import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/Navigation.module.css";


function Navigation(props) {
  return (
    <div className= {styles.navigation}>
      <nav>
        <div class="container">
          <Link class="navbar-brand" to="/">
            
          </Link>

          <div class={styles.navbar}>
            <ul class={styles.navlinks}>
             
                <Link class={styles.navlink} to="/">
                  Home   
    
                  <span class="sr-only">(current)</span>
                </Link>
              {/* </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              > */}
                <Link class={styles.navlink} to="/about">
                  About  
                </Link>
              {/* </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Projects" ? "active" : ""
                }`}
              > */}
                <Link class={styles.navlink} to="/Projects">
                  Projects
                </Link>
              {/* </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/Gallery" ? "active" : ""
                }`}
              > */}
                <Link class={styles.navlink} to="/Gallery">
                Gallery
                </Link>


                <a class={styles.navlink} 
                href="https://docs.google.com/document/d/1A8DNL91pz2bvNxiCsFOrF8efWfRHxcyy5vw5ihGFlFo/edit?usp=sharing" 
                target="_blank" rel="noopener noreferrer">
                Resume
                </a>

                


                
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);