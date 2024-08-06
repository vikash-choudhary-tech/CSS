import { useState } from "react";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {

    const [dynamicStyle,setDynamicStyle] = useState(false);

    function toggleNav(){
        //Toggle the nav bar based on a state
        console.log("check")
        setDynamicStyle(!dynamicStyle);
    }

    return(
        <>
           
            <div className={styles.navHeader}>
                <ul>
                <li className={dynamicStyle?styles.hamburgerToggle:styles.hamburger} onClick={toggleNav}>
                            <span>----</span>
                </li>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contacts
                    </li>
                    <li>
                        Sign Up
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavigationBar;