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

                <Link class={styles.navlink} to="/Projects">
                  Resume
                </Link>
              {/* </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);