import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
   return (
      <nav className={styles.navbar}>
         <ul>
            <li className={styles.title}>My Money</li>
            <li>
               <Link to="/login">Login</Link>
            </li>
            <li>
               <Link to="/signup">Signup</Link>
            </li>
         </ul>
      </nav>
   );
}

export default Navbar;
