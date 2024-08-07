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

        <nav className={styles.navbar}>
            <div className={styles.navBrand}>LEARN CSS</div>
            <div className={styles.navbarToggle} onClick={toggleNav}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            <ul className={`${styles.navbarMenu} ${dynamicStyle && styles.hidden}`}>
                <li>Home</li>
                <li>Contact</li>
                <li>Address</li>
                <li>Login</li>
            </ul>

        </nav>
        </>
    )
}

export default NavigationBar;