import Link from "next/link";
import styles from "./styles.module.scss";

import { FaInstagram, FaSpotify } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOpenMenu = () => {
        if(menuOpen) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    }
    
    const handleScroll = () => {
        let position = window.scrollY;
        setScrollPosition(position);

        window.addEventListener('scroll', handleScroll);

        console.log(position)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }

    useEffect(() => {
        handleScroll();
    }, [])
    
    return (
        <>
            <header className={`${styles.header} ${scrollPosition >= 615 ? styles.active : ""}`}>
                <div className={`container ${styles.containerHeader}`}>
                     <Link href="http://localhost:3000/"><img src="/next.svg" alt="Logotipo Garage" className={styles.logotipo}/></Link>
                     <nav className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
                        <Link href="http://localhost:3000/#home" className={styles.navItem}>Inicio</Link>
                        <Link href="http://localhost:3000/#events" className={styles.navItem}>Programação</Link>
                        <Link href="http://localhost:3000/#about" className={styles.navItem}>Sobre a Casa</Link>
                        <Link href="http://localhost:3000/#contact" className={styles.navItem}>Contato</Link>
                     </nav>
                     <div className={styles.social}>
                        <Link href="#" className={styles.socialItem}><FaInstagram /></Link>
                        <Link href="#" className={styles.socialItem}><FaSpotify /></Link>
                        <button onClick={handleOpenMenu} className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                            <span className={`${styles.line} ${styles.line1}`}></span>
                            <span className={`${styles.line} ${styles.line2}`}></span>
                            <span className={`${styles.line} ${styles.line3}`}></span>
                        </button>
                     </div>
                </div>
            </header>
        </>
    )
}

export default Header;