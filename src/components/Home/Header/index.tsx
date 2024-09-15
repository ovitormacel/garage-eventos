import Link from "next/link";
import styles from "./styles.module.scss";

import { FaInstagram, FaSpotify } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";

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
                     <Link href="/"><Image width={538} height={131} src="/next.svg" alt="Logotipo Garage" className={styles.logotipo}/></Link>
                     <nav className={`${styles.navbar} ${menuOpen ? styles.active : ""}`}>
                        <Link href="/#home" className={styles.navItem}>Inicio</Link>
                        <Link href="/#events" className={styles.navItem}>Programação</Link>
                        <Link href="/#about" className={styles.navItem}>Sobre a Casa</Link>
                        <Link href="/#contact" className={styles.navItem}>Contato</Link>
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